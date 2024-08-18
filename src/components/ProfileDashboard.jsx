import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import profile from '../img/icons8-male-user-50.png';

const initialUserActivity = [
  "Logged in on 2024-08-01",
  "Logged in on 2024-07-30",
  "Logged in on 2024-07-29"
];

const ProfileDashboard = () => {
  const [userActivity, setUserActivity] = useState(initialUserActivity);
  const [submissions, setSubmissions] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    profilePicture: profile
  });
  const [newProject, setNewProject] = useState({ title: "", description: "", date: "" });
  const [isEditingProfile, setIsEditingProfile] = useState(false); 

  useEffect(() => {
    const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const savedSubmissions = JSON.parse(localStorage.getItem('submissions'));

    if (savedUserInfo) setUserInfo(savedUserInfo);
    if (savedSubmissions) setSubmissions(savedSubmissions);

    handleLogin();
  }, []);

  const handleLogin = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const newActivity = `Logged in on ${currentDate}`;
    setUserActivity((prev) => [newActivity, ...prev]);
  };

  const handleProjectSubmit = () => {
    if (newProject.title && newProject.description) {
      const currentDate = new Date().toISOString().split('T')[0];
      const updatedSubmissions = [{ ...newProject, date: currentDate }, ...submissions];
      setSubmissions(updatedSubmissions);
      localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
      setNewProject({ title: "", description: "", date: "" });
    }
  };

  const handleEditSubmission = (index) => {
    const editedSubmission = prompt('Edit your submission:', submissions[index].title);
    if (editedSubmission) {
      const updatedSubmissions = submissions.map((submission, i) =>
        i === index ? { ...submission, title: editedSubmission } : submission
      );
      setSubmissions(updatedSubmissions);
      localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    }
  };

  const handleDeleteSubmission = (index) => {
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
  };

  const handleUpdateProfile = (updatedInfo) => {
    setUserInfo(updatedInfo);
    localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
    setIsEditingProfile(false); 
  };

  const handleEditProfileClick = () => {
    setIsEditingProfile(true); 
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(userInfo); 
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img 
            src={userInfo.profilePicture || profile} 
            alt="Profile" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mr-0 md:mr-4 mb-4 md:mb-0"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Welcome to Your Profile Dashboard, {userInfo.name || "User"}
          </h2>
        </div>

        {/* User Information Section */}
        {!isEditingProfile ? (
          <div id="info" className="mb-6 p-4 md:p-6 bg-white rounded-lg shadow-lg text-black">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
              <div className="p-4 h-auto bg-gray-400 rounded-lg flex items-center">
                <FaUser className="text-cyan-800 mr-3" />
                <div>
                  <p><strong>Name:</strong> {userInfo.name}</p>
                </div>
              </div>
              <div className="p-4 h-auto bg-gray-400 rounded-lg flex items-center">
                <FaMapMarkerAlt className="text-cyan-800 mr-3" />
                <div>
                  <p><strong>Address:</strong> {userInfo.address}</p>
                </div>
              </div>
              <div className="p-4 h-auto bg-gray-400 rounded-lg flex items-center">
                <FaEnvelope className="text-cyan-800 mr-3" />
                <div>
                  <p><strong>Email:</strong> {userInfo.email}</p>
                </div>
              </div>
              <div className="p-4 h-auto bg-gray-400 rounded-lg flex items-center">
                <FaPhone className="text-cyan-800 mr-3" />
                <div>
                  <p><strong>Phone:</strong> {userInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button 
                onClick={handleEditProfileClick}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Edit Your Profile
              </button>
            </div>
          </div>
        ) : (
          // Profile Edit Form Section
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Edit Your Profile</h2>
            <form onSubmit={handleProfileSubmit} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userInfo.address}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button 
                type="submit"
                className="bg-cyan-700 text-white py-2 px-4 rounded hover:bg-cyan-900"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Recent User Activity Section */}
      <div id="recent-activity" className="p-4 md:p-6 bg-white rounded-lg shadow-lg text-black mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Recent User Activity</h3>
        <ul className="list-disc pl-6">
          {userActivity.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      {/* Recent Submissions Section */}
      <div id="recent-submissions" className="p-4 md:p-6 bg-white rounded-lg shadow-lg text-black mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Recent Submissions</h3>
        <ul className="space-y-4">
          {submissions.map((submission, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{submission.title}</h4>
                <p>{submission.description}</p>
                <p className="text-gray-600 text-sm">Submitted on: {submission.date}</p>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleEditSubmission(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDeleteSubmission(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <input 
            type="text" 
            value={newProject.title} 
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} 
            placeholder="Project Title" 
            className="p-2 border border-gray-300 rounded w-full mb-2"
          />
          <textarea 
            value={newProject.description} 
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} 
            placeholder="Project Description" 
            className="p-2 border border-gray-300 rounded w-full mb-2"
          ></textarea>
          <button 
            onClick={handleProjectSubmit} 
            className="bg-cyan-700 text-white py-2 px-4 rounded hover:bg-cyan-900"
          >
            Submit Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
