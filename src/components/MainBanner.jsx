import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../img/bg.jpg";

function MainBanner() {
  const handleLearnMoreClick = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start pl-10 justify-center h-full text-left text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl mt-36 font-bold mb-4">
            Where <span className="text-cyan-600">Technology</span><br />Meets Precision
          </h1>
          <p className="text-lg md:text-xl mb-8">
            With a complete fusion of technological experts, thorough precision, knowledge, and relevant ideas, we reevaluate possibilities and form the future of digital transformation.
          </p>
        </div>
        <div>
          <Link to="/contact">
            <button className="bg-blue-700 hover:bg-white text-white hover:text-black font-semibold py-2 px-4 rounded mr-4">
              Contact Us
            </button>
          </Link>
          <button onClick={handleLearnMoreClick} className="bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
