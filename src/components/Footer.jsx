import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setEmail(""); // Clear the input field
    setShowPopup(true); // Show the popup
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };
  return (
    <footer className="bg-gradient-to-tr from-cyan-900 via-cyan-800  to-blue-950 text-white py-5 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p className="mb-2">123 Main Street</p>
          <p className="mb-2">City, State, ZIP</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: contact@company.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup Form */}
        <div>
        <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full p-2 mb-4 text-gray-800"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>

          {/* Popup Message */}
          {showPopup && (
            <div className="mt-4 p-2 bg-green-500 text-white rounded">
              Thanks for subscribing!
            </div>
          )}
        </div>

      </div>
      <div className="mt-8  text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
