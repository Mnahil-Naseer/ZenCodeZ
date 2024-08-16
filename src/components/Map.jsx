import React from 'react';

function Map() {
  return (
    <div className="my-6 bg-gray-200 p-8">
      <h2 className="text-2xl font-bold text-justify mb-4">Our Office Location</h2>
      <p className="text-justify mb-6 text-black">
        Visit us at our office located in the heart of downtown. We are here to assist you with all your needs.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.885237083936!2d-122.4014185!3d37.7873605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c6b7f6c07%3A0x5d8b1b2c7e8b9af1!2sSalesforce%20Tower%2C%20541%20Howard%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1691495033074!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      ></iframe>
    </div>
  );
}

export default Map;
