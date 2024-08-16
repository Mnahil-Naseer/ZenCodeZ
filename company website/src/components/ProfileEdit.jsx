import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });


  React.useEffect(() => {
    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (savedUserInfo) {
      setProfileData(savedUserInfo);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed from the ProfileDashboard component
    if (location.state && location.state.handleUpdateProfileRef) {
      location.state.handleUpdateProfileRef(profileData);
    }
    navigate('/profile');
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profileData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
