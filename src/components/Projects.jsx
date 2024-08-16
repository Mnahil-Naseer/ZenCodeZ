import React, { useState, useEffect } from 'react';
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import project4 from '../img/project4.jpg';
import project5 from '../img/project5.jpg';
import project6 from '../img/project6.jpg';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Developed a comprehensive e-commerce platform that integrates seamlessly with payment gateways, offers robust inventory management, and provides a user-friendly interface for both customers and admins. Enhanced with features like real-time order tracking and dynamic product recommendations.",
    image: project1
  },
  {
    title: "Mobile App for Healthcare",
    description: "Created a mobile application for a healthcare provider that allows patients to book appointments, access medical records, and receive real-time health notifications. The app features secure login, personalized health tips, and integration with telemedicine services.",
    image: project2
  },
  {
    title: "Data Analytics Dashboard",
    description: "Designed and implemented a data analytics dashboard that provides interactive data visualizations and in-depth business insights. The dashboard supports multiple data sources and offers customizable reports to help businesses make informed decisions based on real-time data.",
    image: project3
  },
  {
    title: "Custom CRM System",
    description: "Developed a custom Customer Relationship Management (CRM) system tailored to the specific needs of a client. The system includes features such as lead tracking, sales forecasting, and automated email campaigns, enhancing customer engagement and streamlining sales processes.",
    image: project4
  },
  {
    title: "UI/UX Redesign for SaaS Product",
    description: "Led the redesign of a SaaS product’s UI/UX to improve user experience and engagement. The project involved creating intuitive navigation, modern visual design, and implementing user feedback to refine features and optimize performance across various devices.",
    image: project5
  },
  {
    title: "AI-Powered Chatbot",
    description: "Developed an AI-powered chatbot that enhances customer support by providing instant responses and personalized recommendations. The chatbot integrates with existing systems to offer 24/7 assistance, collect user feedback, and improve over time with machine learning.",
    image: project6
  }
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000); 
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projectsData.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section className="bg-slate-200 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className={`p-6 rounded shadow-lg shadow-gray-700 ${index % 2 === 0 ? 'bg-gradient-to-tr from-cyan-900 via-cyan-700 to-blue-900  text-white' : 'bg-gray-100'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-4 h-2 rounded-full cursor-pointer ${index === currentPage ? 'bg-cyan-800' : 'bg-gray-400'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
