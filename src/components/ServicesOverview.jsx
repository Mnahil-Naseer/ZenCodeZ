import React from 'react';
import servicesData from './ServicesData';
import { Link } from 'react-router-dom';

function ServicesOverview() {
  return (
    <section className="bg-slate-200 p-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-cyan-800 mb-5 mx-20">Our Services</h2>
        <div className="text-3xl font-bold mb-12 mx-20">
          We Are Finest At
          <p className="text-lg font-normal mt-4">
            Our team of competent professionals merges technical skill with industry vision to provide in-depth IT services that drive innovation, growth, and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative bg-slate-100 mx-8 rounded-tl-3xl rounded-br-3xl shadow-inner shadow-gray-500 hover:shadow-lg hover:text-white hover:shadow-gray-700 hover:bg-gradient-to-tr from-cyan-900 via-cyan-700 to-blue-900 p-9 w-80 h-96 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 mr-4">{service.img}</div>
                <h3 className="text-2xl font-semibold">{service.name}</h3>
              </div>
              <p className="mb-4 text-center">{service.description}</p>
              <Link
                to={`/services#${service.link.split('/').pop()}`}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10"
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
