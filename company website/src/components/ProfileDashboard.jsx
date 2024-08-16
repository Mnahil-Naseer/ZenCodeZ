import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import profile from '../img/icons8-male-user-50.png';

const initialUserActivity = [
  "Logged in on 2024-08-01",
  "Logged in on 2024-07-30",
  "Logged in on 2024-07-29"
];

const ProfileDashboard = ({ onEditProfile }) => {
  const [userActivity, setUserActivity] = useState(initialUserActivity);
  const [submissions, setSubmissions] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    profilePicture: ''
  });
  const [newProject, setNewProject] = useState({ title: "", description: "", date: "" });
  const navigate = useNavigate();

  const handleUpdateProfileRef = useRef(null);

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
    setUserActivity([newActivity, ...userActivity]);
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
  };
  
  handleUpdateProfileRef.current = handleUpdateProfile;

  const handleEditProfileClick = () => {
    onEditProfile(); // Trigger parent component's edit profile mode
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mr-0 md:mr-4 mb-4 md:mb-0"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Welcome to Your Profile Dashboard, {userInfo.name || "User"}
          </h2>
        </div>

        {/* User Information Section */}
        <div className="mb-6 p-4 md:p-6 bg-white rounded-lg shadow-lg text-black">
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
          <button 
            onClick={handleEditProfileClick}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-6"
          >
            Edit Your Profile
          </button>
        </div>
      </div>

      {/* User Activity Section */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Your Recent Activity</h3>
        <ul className="list-disc list-inside">
          {userActivity.map((activity, index) => (
            <li key={index} className="mb-2">{activity}</li>
          ))}
        </ul>
      </div>

      {/* User Submissions Section */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Your Submissions</h3>
        {submissions.map((submission, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-md md:text-lg font-semibold">{submission.title}</h4>
                <p className="text-gray-700">{submission.description}</p>
                <p className="text-gray-500 text-sm">{submission.date}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleEditSubmission(index)}
                  className="text-blue-600 hover:underline"
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDeleteSubmission(index)}
                  className="text-red-600 hover:underline"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="p-4 bg-white rounded-lg shadow-lg text-black">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Submit New Project</h3>
          <input
            type="text"
            placeholder="Project Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="border p-2 w-full mb-2 rounded"
          />
          <textarea
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="border p-2 w-full mb-2 rounded"
          />
          <button 
            onClick={handleProjectSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
