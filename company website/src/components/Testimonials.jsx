import React, { useState, useEffect } from 'react';
import logo1 from '../img/logo1.jpg';
import logo2 from '../img/logo2.jpg';
import logo3 from '../img/logo3.jpg';
import logo4 from '../img/logo4.jpg';
import logo5 from '../img/logo5.jpg';
import logo6 from '../img/logo6.jpg';
import logo7 from '../img/logo7.jpg';
import logo8 from '../img/logo8.jpg';
import logo9 from '../img/logo9.jpg';
import logo10 from '../img/logo10.jpg';
const testimonialsData = [
  { quote: "This company exceeded our expectations. Their services are top-notch!", clientName: "John Doe", clientPosition: "CEO, Company A", logo: logo1 },
  { quote: "Excellent service and great attention to detail. Highly recommended!", clientName: "Jane Smith", clientPosition: "Marketing Director, Company B", logo: logo2 },
  { quote: "Professional and efficient. They delivered outstanding results.", clientName: "Michael Johnson", clientPosition: "CTO, Company C", logo: logo6 },
  { quote: "Fantastic experience from start to finish. Will definitely use again!", clientName: "Emily Davis", clientPosition: "Product Manager, Company D", logo: logo3 },
  { quote: "The team's expertise was evident and their communication was excellent.", clientName: "Chris Brown", clientPosition: "Lead Developer, Company E", logo: logo5 },
  { quote: "Great results and very professional. Highly satisfied with their work.", clientName: "Sarah Wilson", clientPosition: "Operations Head, Company F", logo: logo4 },
  { quote: "They went above and beyond to meet our needs. Highly recommend!", clientName: "David Lee", clientPosition: "Sales Director, Company G", logo: logo7 },
  { quote: "Impressive work and outstanding customer service. Very pleased.", clientName: "Laura Martinez", clientPosition: "HR Manager, Company H", logo: logo8 },
  { quote: "A pleasure to work with. They delivered exactly what we needed.", clientName: "Tom Harris", clientPosition: "Finance Director, Company I", logo: logo9 },
  { quote: "Exceptional quality and attention to detail. Will use their services again.", clientName: "Sophia Clark", clientPosition: "Business Analyst, Company J", logo: logo10 }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 9000); 

    return () => clearInterval(interval); 
  }, [totalPages]);

  const currentTestimonials = testimonialsData.slice(currentIndex * testimonialsPerPage, (currentIndex + 1) * testimonialsPerPage);

  return (
    <section className="bg-slate-200 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded shadow-lg shadow-gray-800">
                <div className="mb-4">
                  <img src={testimonial.logo} alt={`${testimonial.clientName} logo`} className="h-28 w-28 mx-auto rounded-full shadow-lg shadow-black" />
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.clientName}</p>
                <p className="text-sm text-gray-600">{testimonial.clientPosition}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full bg-cyan-800 cursor-pointer ${currentIndex === index ? 'bg-cyan-600' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
