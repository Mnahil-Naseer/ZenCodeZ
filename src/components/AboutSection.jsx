import React from 'react';
import { useInView } from 'react-intersection-observer';
import companyImage from '../img/whoweare.jpg';
import mission from '../img/Mission.jpg';
import vision from '../img/Vision.jpg'; 

function AboutSection() {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 1 });
  const [whoWeAreRef, whoWeAreInView] = useInView({ triggerOnce: true, threshold: 1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <section id="about-section" className="bg-slate-200 py-12 px-4">
      <div className="container mx-auto">
        <h2 
          ref={aboutRef}
          className={`text-3xl font-bold mb-16 text-center ${aboutInView ? 'animate-fadein' : 'opacity-0'}`}
        >
          About ZenCodeZ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
          <div className={`flex justify-center items-center ${whoWeAreInView ? 'animate-slideinLeft' : 'opacity-0'}`} ref={whoWeAreRef}>
            <img src={companyImage} alt="Company Introduction" className="rounded-full shadow-inner shadow-black w-96" />
          </div>
          <div className={`flex mb-12 flex-col mx-10 ${whoWeAreInView ? 'animate-slideinRight' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-7">Who We Are</h3>
            <p className="text-lg text-justify">
              Welcome to ZenCodeZ, the epitome of innovation and excellence in the IT industry. Our company stands at the forefront of technological advancement, transforming ideas into cutting-edge solutions with unparalleled precision and expertise. At ZenCodeZ, we believe in pushing the boundaries of what's possible, crafting bespoke software solutions that redefine industry standards and set new benchmarks for success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`flex mb-12 flex-col mx-10 ${missionInView ? 'animate-slideinLeft' : 'opacity-0'}`} ref={missionRef}>
            <h3 className="text-2xl font-semibold mb-7">Our Mission</h3>
            <p className="text-lg text-justify">
              At ZenCodeZ, our mission is to transform the digital landscape by leveraging the power of innovation and creativity. We are committed to delivering transformative solutions that empower businesses to achieve their highest potential. By prioritizing excellence and a customer-centric approach, we aim to surpass expectations, address unique challenges, and promote sustainable growth for our clients. Through relentless pursuit of excellence, we strive to create value, drive growth, and foster a culture of trust, collaboration, and continuous improvement.
            </p>
          </div>
          <div className={`flex justify-center items-center ${missionInView ? 'animate-slideinRight' : 'opacity-0'}`}>
            <img src={mission} alt="Company Mission" className="rounded-full shadow-inner shadow-gray-500 w-96" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`flex justify-center items-center ${visionInView ? 'animate-slideinLeft' : 'opacity-0'}`} ref={visionRef}>
            <img src={vision} alt="Company Vision" className="rounded-full shadow-inner shadow-gray-500 w-96" />
          </div>
          <div className={`flex mb-12 flex-col mx-10 ${visionInView ? 'animate-slideinRight' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-7">Our Vision</h3>
            <p className="text-lg text-justify">
              At ZenCodeZ, our driving force is the vision of a connected world, and we are dedicated to delivering transformative IT solutions that have a profound impact on people’s lives. Our goal is to empower organizations to navigate the ever-evolving digital landscape with creativity, collaboration, and sustainable progress. We strive to establish ourselves as a prominent presence in the technology domain by consistently providing first-class software products and services that exceed our clients’ expectations. We aim to earn recognition for our unmatched expertise, pioneering spirit, and unwavering dedication to ensuring customer delight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
