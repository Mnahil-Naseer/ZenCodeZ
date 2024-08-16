import React, { useState } from 'react';
import ProfileDashboard from '../components/ProfileDashboard';
import ProfileEdit from '../components/ProfileEdit';
import Notifications from '../components/Notifications';
import Support from '../components/Support';
import { useNavigate } from 'react-router-dom';

function ProfilePage({ isLoggedIn, setIsLoggedIn }) {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  return (
    <div className="relative container mx-auto p-4 md:p-6 lg:p-8">
      {editMode ? (
        <ProfileEdit />
      ) : (
        <>
          <ProfileDashboard onEditProfile={handleEditProfile} />
          <Notifications />
          <Support />
        </>
      )}
      <button
        onClick={handleLogout}
        className="absolute bottom-4 left-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
