import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import jobImage from '../img/services.jpg'; // Replace with the correct path to your image

function JobListings() {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedJob, setSelectedJob] = useState(null); // State to manage selected job

  const jobListings = [
    {
      title: "Software Engineer",
      description: "Join our dynamic team to develop and maintain cutting-edge web applications, ensuring high performance and scalability.",
      applicationLink: "/apply/software-engineer", // Replace with actual form page route
    },
    {
      title: "Product Designer",
      description: "Create intuitive and engaging user interfaces while enhancing user experiences across our product suite.",
      applicationLink: "/apply/product-designer", // Replace with actual form page route
    },
    // Add more job listings as needed
  ];

  const benefits = [
    { text: "Comprehensive Health Insurance", icon: "🩺" },
    { text: "401(k) Retirement Plan with Company Match", icon: "💼" },
    { text: "Generous Paid Time Off", icon: "🏖️" },
    { text: "Continuous Professional Development Opportunities", icon: "📚" },
  ];

  const companyCulture = `
    At ZenCodeZ, we foster a culture of innovation and collaboration. Our diverse team thrives in an environment where creativity is encouraged, and every voice is heard. We are committed to personal growth and professional excellence, making ZenCodeZ not just a workplace, but a community.
  `;

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseForm = () => {
    setSelectedJob(null);
  };
  const handleSubmit = () => {
    alert('Your application has been submitted successfully!');
    handleCloseForm(); // Optionally close the form after submission
  };
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg" id="job-openings">
      <h2 className="text-3xl font-bold mb-6 text-cyan-700">Join Our Team</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Current Openings</h3>
        {jobListings.map((job, index) => (
          <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
            <p className="mb-4 text-gray-700">{job.description}</p>
            <button
              onClick={() => handleApplyClick(job)}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Apply Here
            </button>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Employee Benefits</h3>
        <ul className="list-none text-gray-700 space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="text-2xl mr-4">{benefit.icon}</span>
              {benefit.text}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Company Culture</h3>
        <p className="text-gray-700 leading-relaxed">{companyCulture}</p>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h4 className="text-2xl font-semibold mb-4">{selectedJob.title}</h4>
            <p className="mb-4">{selectedJob.description}</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                <input type="file" id="resume" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
              </div>
              <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">Submit Application</button>
              <button
                type="button"
                onClick={handleCloseForm}
                className="ml-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function MainBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between z-50 p-2 md:p-16">
      {/* Left Section */}
      <div className="md:w-1/2 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Shape the Future of Technology, Wherever You Are
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          At ZenCodeZ, we're redefining the standards of the tech industry. If you're passionate about innovation and problem-solving at scale, we want you on our team.
        </p>
        <a href="#job-openings" className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded hover:bg-cyan-900 transition duration-300">
          Explore Jobs
        </a>
      </div>
      
      {/* Right Section - Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img src={jobImage} alt="Job Opportunities" className="w-full h-auto object-cover rounded-lg shadow-lg"/>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <MainBanner />
      <JobListings />
    </div>
  );
}

export default App;
