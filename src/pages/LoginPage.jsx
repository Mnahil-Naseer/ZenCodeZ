import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/'); // Redirect to main page
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-800 via-cyan-600 to-blue-950 mt-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-100 w-full max-w-md px-8 py-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username/Email</label>
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
          <div className="flex justify-between items-center mt-4 mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-br text-white py-2 rounded-full hover:bg-gradient-to-tr from-cyan-950 via-cyan-800 to-blue-900 transition duration-200"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-700">Not registered yet? <a href="#" className="text-blue-600 hover:underline">Create new Account</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
