import React, { useState } from 'react';
import bgimg from '../img/bgcontact.jpg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('You must agree to the policy to submit the form.');
      return;
    }
    alert('Thank you for reaching out! We have received your message and will get back to you shortly.');
    console.log('Form data submitted:', formData);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
      agree: false
    });
  };

  return (
    <section className="bg-gray-100">
      <div
        className="relative bg-cover bg-center h-96 md:h-screen w-full"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-white p-8 flex items-center h-full">
          <div className="w-full max-w-md mx-5 text-left md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How may <span className="text-cyan-500">We help You?</span>
            </h1>
            <p className="text-gray-300">
              We’re available at all times to listen, guide, and support you in every step you take, guaranteeing a smooth experience from beginning to end.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-16 py-16 flex flex-col lg:flex-row gap-8 justify-center items-stretch text-justify">
        <div className="flex-1 bg-gradient-to-tr from-cyan-900 via-cyan-700 to-blue-950 rounded-3xl shadow-inner shadow-cyan-100 px-6 md:px-10 py-8 flex flex-col">
          <div className="mx-auto lg:mx-9 flex-grow">
            <h2 className="text-2xl md:text-3xl font-bold mb-9 mt-8 text-white text-center lg:text-left">Contact With Us</h2>
            <p className="text-base text-white mb-8">We are ready to help you with all your queries. Reach out to us at any time.</p>
            <span className="text-2xl md:text-3xl font-semibold text-cyan-400">Address</span>
            <p className="text-white text-lg mb-9">
              <br />123 Main Street, Anytown, USA
            </p>
            <span className="text-2xl md:text-3xl font-semibold text-cyan-400">Mailbox</span>
            <p className="text-white text-lg mb-9 ">
              <br />info@example.com
            </p>
            <span className="text-2xl md:text-3xl font-semibold text-cyan-400">Phone Number</span>
            <p className="text-white text-lg mb-9 ">
              <br />(123) 456-7890
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-700">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-pink-600 hover:text-pink-700">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-blue-800 hover:text-blue-900">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">We're Here To Serve You</h2>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-3xl max-w-lg mx-auto flex-grow-0">
            <div className="mb-4">
              <label htmlFor="name" className="block text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-3xl mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-3xl mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-black">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-3xl mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-black">Select Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-3xl mt-2"
                required
              >
                <option value="">--Select a Service--</option>
                <option value="web">Web Development</option>
                <option value="development">Mobile Development</option>
                <option value="data">Data Analysis</option>
                <option value="design">Graphic Design</option>
                <option value="ui">UI/UX Design</option>
                <option value="animation">Video Animation</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-black">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-3xl mt-2"
                rows="5"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="agree" className="text-gray-700">
                I agree to the terms set in ZenCodeZ's Terms & Conditions and <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> and to receive occasional email content from ZenCodeZ.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-gradient-to-tr from-cyan-950 via-cyan-800 to-blue-950 hover:text-white font-bold py-2 px-4 rounded-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
