import React from 'react';
import ProfileDashboard from '../components/ProfileDashboard';
import Notifications from '../components/Notifications';
import Support from '../components/Support';
import { useNavigate } from 'react-router-dom';
import {  FaSignOutAlt } from 'react-icons/fa';

function ProfilePage({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Update the isLoggedIn state to false
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="relative container mx-auto p-4 md:p-6 lg:p-8">
      <ProfileDashboard />
      <Notifications />
      <Support />
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 flex items-center"
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
