import React, { useState } from 'react';
import './login-signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (!fullName || !registrationNo || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill out all fields');
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }
  
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }
  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    setErrorMessage('');
  
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, registrationNo, email, password }),
      });
  
      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        throw new Error('Signup failed');
      }
  
      const data = await response.text(); // Get raw text response
      try {
        // Try to parse JSON only if the response is valid
        const jsonData = JSON.parse(data);
        console.log('Signup successful:', jsonData);
      } catch (err) {
        throw new Error('Failed to parse server response');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong');
    }
  };
  

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
         
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="switch-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
