const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

const app = express();

// Middleware for CORS, Helmet (security headers), and JSON parsing
app.use(cors({
  origin: '*', // Replace '*' with your frontend URL for better security
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(helmet()); // Adds security headers

// Rate-limiting middleware to prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use(limiter);

// Validate environment variables
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error('Error: Missing required environment variables (MONGO_URI, JWT_SECRET)');
  process.exit(1);
}

// MongoDB connection
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
})();

// Models
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, // Email validation
  password: { type: String, required: true, minlength: 6 }, // Password strength check
});

const User = mongoose.model('User', UserSchema);

const CertificateSchema = new mongoose.Schema({
  certificateID: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  courseName: { type: String, required: true },
  issueDate: { type: Date, default: Date.now },
});

const Certificate = mongoose.model('Certificate', CertificateSchema);

// Routes

// User Signup
app.post('/api/auth/signup', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash password with a salt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
});

// User Login
app.post('/api/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      token,
      message: 'Login successful',
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    next(err);
  }
});

// Certificate Verification
app.post('/api/certificates/verify', async (req, res, next) => {
  try {
    const { certificateIDs } = req.body;

    if (!Array.isArray(certificateIDs) || certificateIDs.length === 0) {
      return res.status(400).json({ message: 'certificateIDs must be a non-empty array' });
    }

    const certificates = await Certificate.find({ certificateID: { $in: certificateIDs } });
    if (certificates.length === 0) {
      return res.status(404).json({ message: 'No certificates found' });
    }

    res.status(200).json(certificates);
  } catch (err) {
    next(err);
  }
});

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the backend API');
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
