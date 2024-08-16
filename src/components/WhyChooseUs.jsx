import React, { useState, useEffect } from 'react';
import img from '../img/Mask-group9.png';
import choose from '../img/Choose.jpg';
import innovation from '../img/Innovation.jpg';
import collaboration from '../img/Collaboration.jpg';
import excellence from '../img/Excellence.jpg';
import health from '../img/health.jpg';
import integrity from '../img/Integrity.jpg';
import client1 from '../img/client1.jpg';
import client2 from '../img/client2.jpg';
import client3 from '../img/client3.jpg';
import client4 from '../img/client4.jpg';
import client5 from '../img/client5.jpg';
import client6 from '../img/client6.jpg';
import award1 from '../img/award1.jpg';
import award2 from '../img/award2.jpg';
import award3 from '../img/award3.jpg';
import award4 from '../img/award4.jpg';
import award5 from '../img/award5.jpg';
import award6 from '../img/award6.jpg';
import award7 from '../img/award7.jpg';
import award8 from '../img/award8.jpg';
const clientSuccessStories = [
  {
    title: "ZenCommerce Revamp",
    description: `
      ZenCommerce came to us with challenges related to an outdated website design and a complicated checkout process. We overhauled their e-commerce platform, modernizing the design and simplifying user interactions. As a result, ZenCommerce saw a substantial increase in sales and user engagement.
    `,
    image: client1
  },
  {
    title: "Secure Finance Suite",
    description: `
      SecureFinance needed a secure and efficient financial management system. We developed a custom suite that enhanced data security and streamlined financial operations. This led to significant improvements in transaction processing and data accuracy.
    `,
    image: client2
  },
  {
    title: "Health Track Integration",
    description: `
      HealthTrack was struggling with patient management inefficiencies. We implemented an integrated system that modernized their scheduling and record-keeping processes. This upgrade resulted in higher patient satisfaction and improved operational efficiency.
    `,
    image: client3
  },
  {
    title: "Secure Vault Implementation",
    description: `
      SecureVault, a leading financial services firm, struggled with outdated security protocols that left them vulnerable to cyber threats. We developed and implemented a robust cybersecurity solution, enhancing their security measures and ensuring compliance with industry standards. As a result, SecureVault experienced a significant reduction in security breaches and increased customer trust.
    `,
    image: client4
  },
  {
    title: "EduTech Learning Platform",
    description: `
      EduTech sought a robust online learning platform for remote education. We built a comprehensive e-learning system with interactive features and real-time collaboration tools. The platform significantly enhanced student engagement and academic performance.
    `,
    image: client5
  },
  {
    title: "Retail Pro POS System",
    description: `
      RetailPro required an upgraded point-of-sale system to improve transaction speed and inventory management. We designed and implemented a new POS system that streamlined operations and provided real-time inventory tracking. This upgrade led to increased efficiency and reduced operational costs.
    `,
    image: client6
  },
];

const awards = [
  { title: "Best Company 2024", image: award1 },
  { title: "Top Innovator 2023", image: award2 },
  { title: "Excellence in Customer Service 2022", image: award3 },
  { title: "Outstanding Leadership in Tech 2021", image: award4 },
  { title: "Best Mobile App Development 2020", image: award5 },
  { title: "Top IT Solutions Provider 2019", image: award6 },
  { title: "Innovation in AI and Machine Learning 2018", image: award7 },
  { title: "Customer Satisfaction Excellence Award 2017", image: award8 }
];


const coreValues = [
  {
    title: "Innovation",
    description: "We foster a culture of continuous learning and innovation, encouraging our team to think outside the box and explore novel ways to solve complex problems.",
    image: innovation,
  },
  {
    title: "Excellence",
    description: "We are dedicated to delivering excellence in every aspect of our work, from product development to customer support. Our focus on quality is unwavering.",
    image: excellence,
  },
  {
    title: "Integrity",
    description: "Honesty and transparency are at the heart of everything we do. We value trust and always act with integrity in our interactions with clients, partners, and team members.",
    image: integrity,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaboration and teamwork. By working together, we achieve greater heights and deliver exceptional results.",
    image: collaboration,
  },
  {
    title: "Customer-Centric Approach",
    description: "Our clients are our top priority. We listen to their needs, understand their challenges, and tailor our solutions to meet their unique requirements.",
    image: health,
  }
];

function WhyChooseUs() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isReadMore, setIsReadMore] = useState(false);

  const storiesPerPage = 3;
  const totalPages = Math.ceil(clientSuccessStories.length / storiesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 9000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIndex = currentPage * storiesPerPage;
  const currentStories = clientSuccessStories.slice(startIndex, startIndex + storiesPerPage);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section id="n">
      <div
        className="bg-cover bg-center relative h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex flex-col items-start pl-10 justify-center h-full text-left text-white">
          <div className="max-w-lg">
            <h1 className="text-4xl text-cyan-400 md:text-5xl mt-36 font-bold mb-4">
              Who Are We?
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We are an excellent team of highly professional designers, developers, writers, marketers, and analysts united on the same page.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-slate-200  p-8 rounded-lg shadow-lg">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex mb-12 flex-col mx-16">
            <h3 className="text-3xl font-bold mb-7 mt-5 ">Why Choose Us</h3>
            <p className="text-lg text-justify ">
              At ZenCodeZ, we are committed to pushing the boundaries of what's possible in the IT industry. Since our inception in 2016, we have been at the forefront of technological innovation, driven by a passion for creating cutting-edge software solutions that transform industries, streamline processes, and enhance lives. Our expertise spans across both private and public sectors, delivering custom solutions with unmatched precision and excellence. We specialize in developing sophisticated
              {isReadMore && (
                <span >
                  systems and innovative mobile applications that not only meet but exceed industry standards. With a proven track record of success, we've partnered with numerous companies to deliver impactful software solutions that drive substantial growth and elevate their business potential. Our dedicated team of over 150 skilled professionals is united by a shared commitment to quality and a customer-centric approach. We prioritize understanding our clients' unique challenges and crafting tailored solutions that foster sustainable growth and long-term success. Choose ZenCodeZ, where innovation meets excellence, and let us help your business reach new heights.
                </span>
              )}
              <button
                onClick={toggleReadMore}
                className="text-blue-600 ml-2 focus:outline-none"
              >
                {isReadMore ? "Read Less" : "....Read More"}
              </button>
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <img src={choose} alt="Company Introduction" className="rounded-full shadow-inner shadow-gray-500 w-80" />
          </div>
        </div>
        <div className="mb-12 mx-16">
          <h3 className="text-[32px] font-bold mb-7">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className=" p-4 rounded ">
                <img src={value.image} alt={value.title} className="w-20 h-30  mb-7" />
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className='text-gray-600 '>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mb-12">
          <h3 className="text-2xl font-semibold mb-8">Client Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentStories.map((story, index) => (
              <div key={index} className="bg-gray-100 p-4 hover:bg-gradient-to-tr from-cyan-950 via-cyan-800 to-blue-950 hover:text-white rounded mb-4 shadow-md">
                <img src={story.image} alt={story.title} className="w-96 h-56  mb-7" />
                <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                <p>{story.description} </p>
                <p className='font-bold mt-4 text-cyan-600 hover:text-cyan-300'>Read More</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${index === currentPage ? 'bg-cyan-800' : 'bg-gray-400'
                  }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Awards and Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="relative h-48 p-4 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundImage: `url(${award.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"
                  ></div>
                </div>
                <p className="relative z-10 text-center font-extrabold text-white text-lg">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>





      </div>
    </section>
  );
}

export default WhyChooseUs;
