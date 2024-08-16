import React from 'react';
import JobListings from '../components/JobListings'; // Adjust the path as necessary
import Header from '../components/Header';
import Footer from '../components/Footer';

const HiringPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-6 mt-12">
        <JobListings />
      </main>
    </div>
  );
}

export default HiringPage;
