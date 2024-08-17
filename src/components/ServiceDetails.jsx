
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import bg from '../img/services2.jpg';
import project1 from '../img/e-commerce.jpg';
import project2 from '../img/corporate.jpg';
import app1 from '../img/app1.jpg';
import app2 from '../img/app2.jpg';
import data1 from '../img/data1.jpg';
import data2 from '../img/data2.jpg';
import design1 from '../img/design1.jpg';
import design2 from '../img/design2.jpg';
import ux1 from '../img/ux1.jpg';
import ux2 from '../img/ux2.jpg';
import vedio1 from '../img/vedio1.jpg';
import vedio2 from '../img/vedio2.jpg';
const services = [
  {
    id:'web-development',
    title: "Web Development",
    description: "We build responsive and high-performance websites tailored to your business needs. Our expertise includes front-end and back-end development, ensuring a seamless user experience.",
    projects: [
      {
        name: "E-Commerce Website",
        description: "An online store with product listings, shopping cart, and payment integration.",
        image: project1
      },
      {
        name: "Corporate Website",
        description: "A professional website for a corporate client with custom features and content management.",
        image: project2
      }
    ]
  },
  {
    id:'mobile-development',
    title: "Mobile Development",
    description: "We develop native and cross-platform mobile applications that offer a smooth user experience and integrate well with various devices and operating systems.",
    projects: [
      {
        name: "Fitness Tracker App",
        description: "A mobile app for tracking fitness goals and workouts with user-friendly interfaces.",
        image: app1
      },
      {
        name: "Travel Planner App",
        description: "A mobile app that helps users plan their travels with features such as itinerary creation, location suggestions, and booking integrations.",
        image: app2
      }
      
    ]
  },
  {
    id:'data-analysis',
    title: "Data Analysis",
    description: "We provide comprehensive data analysis services to help you make informed business decisions. Our expertise includes data visualization, statistical analysis, and predictive modeling.",
    projects: [
      {
        name: "Sales Performance Analysis",
        description: "Analyzing sales data to identify trends and improve marketing strategies.",
        image: data1
      },
      {
        name: "Customer Behavior Analysis",
        description: "Studying customer behavior to enhance user experience and engagement.",
        image: data2
      }
    ]
  },
  {
    id:'graphics-design',
    title: "Graphics Design",
    description: "Our graphic design services cover everything from logo creation to marketing materials. We focus on delivering visually appealing designs that effectively communicate your brand message.",
    projects: [
      {
        name: "Brand Logo Design",
        description: "Custom logo design that reflects the brand identity and values.",
        image: design1
      },
      {
        name: "Marketing Brochures",
        description: "Designing brochures that effectively promote products and services.",
        image: design2
      }
    ]
  },
  {
    id:'ui-ux-design',
    title: "UI/UX Design",
    description: "We specialize in creating user-centered designs that enhance usability and provide an intuitive user experience. Our services include user research, wireframing, and prototyping.",
    projects: [
      {
        name: "Website Redesign",
        description: "Redesigning a website to improve user interface and user experience.",
        image: ux1
      },
      {
        name: "Mobile App UI/UX",
        description: "Creating user-friendly interfaces for mobile applications with a focus on user engagement.",
        image: ux2
      }
    ]
  },
  {
    id:'video-animation',
    title: "Video Animation",
    description: "Our video animation services include creating engaging animations for various purposes, such as explainer videos, product demos, and promotional content.",
    projects: [
      {
        name: "Explainer Video",
        description: "Animated video explaining a product or service in an engaging and clear manner.",
        image: vedio1
      },
      {
        name: "Product Demo",
        description: "Animated demonstration of product features and benefits.",
        image: vedio2
      }
    ]
  }
];
function MainBanner() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{  backgroundImage: `url(${bg})`}}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-white p-8 md:p-16 flex items-start">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
            Innovation Delivered, Excellence Achieved
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light leading-relaxed">
            Empowering your business with cutting-edge solutions that drive success and exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
function ServicesDetails() {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const serviceRefs = useRef([]);

  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.substring(1); // Remove the '#' from the hash
      const serviceIndex = services.findIndex(service => service.id === serviceId);

      if (serviceIndex !== -1) {
        setActiveIndex(serviceIndex);
        serviceRefs.current[serviceIndex]?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <MainBanner />
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-700">Our Services</h2>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => serviceRefs.current[index] = el}
              id={service.id}
              className="bg-white p-6 rounded shadow-md mb-8 hover:bg-gradient-to-tr from-cyan-950 via-cyan-700 to-blue-950 hover:text-white"
            >
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <span className='text-2xl hover:text-3xl'>{activeIndex === index ? '✖' : '➕'}</span>
              </div>
              {activeIndex === index && (
                <>
                  <p className="text-inherit mb-4">{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.projects.map((project, idx) => (
                      <div key={idx} className="mb-4">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-48 object-cover rounded mb-2 transform hover:scale-105 transition-transform duration-300"
                        />
                        <h5 className="text-lg font-semibold">{project.name}</h5>
                        <p className="text-inherit w-96">{project.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 mr-28 text-center">
                    <a href="/contact" className="text-inherit py-2 px-4 rounded shadow hover:shadow-inner hover:bg-gradient-to-tr from-cyan-600 to-blue-900 transition-colors duration-300">
                      Contact Us
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesDetails;