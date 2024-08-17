import React from 'react';
import servicesData from './ServicesData';
import { Link } from 'react-router-dom';

function ServicesOverview() {
  return (
    <section className="bg-slate-200 p-6 md:p-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-cyan-800 mb-5 mx-6 md:mx-20">Our Services</h2>
        <div className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 mx-6 md:mx-20">
          We Are Finest At
          <p className="text-base md:text-lg font-normal mt-4">
            Our team of competent professionals merges technical skill with industry vision to provide in-depth IT services that drive innovation, growth, and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-4 md:mx-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative bg-slate-100 rounded-tl-3xl rounded-br-3xl shadow-inner shadow-gray-500 hover:shadow-lg hover:text-white hover:shadow-gray-700 hover:bg-gradient-to-tr from-cyan-900 via-cyan-700 to-blue-900 p-6 md:p-9 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 mr-4">{service.img}</div>
                <h3 className="text-lg md:text-2xl font-semibold">{service.name}</h3>
              </div>
              <p className="text-sm md:text-base mb-4 text-center">{service.description}</p>
              <Link
                to={`/services#${service.link.split('/').pop()}`}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10"
              >
                <button className="bg-cyan-800 text-white py-2 px-4 rounded-md hover:bg-white hover:text-cyan-800 transition-colors duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
