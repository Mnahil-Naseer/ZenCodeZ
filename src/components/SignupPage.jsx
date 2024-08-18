import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignupPage({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      localStorage.setItem('user', JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password
      }));
      setIsLoggedIn(true);
      navigate('/'); 
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-800 via-cyan-600 to-blue-950 mt-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-100 w-full max-w-md px-8 py-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-br text-white py-2 rounded-full hover:bg-gradient-to-tr from-cyan-950 via-cyan-800 to-blue-900 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-700">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
