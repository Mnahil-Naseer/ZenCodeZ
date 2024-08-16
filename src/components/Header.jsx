import React, { useState } from 'react';
import { FaBars, FaCircleUser, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../img/ZenCodeZ2.jpg';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <header className="bg-cyan-800 bg-opacity-40  text-white shadow-black shadow-2xl p-2 fixed top-0 w-full z-20 flex justify-between items-center">
      <div className="flex items-center">
        <button className="text-2xl md:hidden" onClick={handleToggleSidebar}>
          {isSidebarOpen ? <FaXmark /> : <FaBars />}
        </button>
        <Link to="/" className="flex items-center ml-4">
          <img className="rounded h-8 w-8 md:h-12 md:w-12" src={logo1} alt="Logo" />
          <h2 className="mx-2 font-bold text-xl md:text-2xl">ZenCodeZ</h2>
        </Link>
      </div>

      {/* Sidebar for mobile */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-cyan-900 bg-opacity-30  text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}>
        <div className="flex flex-col items-center justify-center mt-8 md:hidden">
          <img className="rounded h-16 w-16" src={logo1} alt="Logo" />
          <h2 className="mt-4 text-2xl font-bold">ZenCodeZ</h2>
        </div>
        <ul className="mt-12 md:mt-0 flex flex-col md:flex-row md:space-x-10 text-lg">
          <li className="my-4 md:my-0">
            <Link to="/" className="hover:font-semibold" onClick={handleToggleSidebar}>Home</Link>
          </li>
          <li className="my-4 md:my-0">
            <Link to="/why-choose-us" className="hover:font-semibold mx-auto" onClick={handleToggleSidebar}>Why Choose Us</Link>
          </li>
          <li className="my-4 md:my-0">
            <Link to="/services" className="hover:font-semibold" onClick={handleToggleSidebar}>Services</Link>
          </li>
          <li className="my-4 md:my-0">
            <Link to="/hiring" className="hover:font-semibold" onClick={handleToggleSidebar}>Hiring</Link>
          </li>
          <li className="my-4 md:my-0">
            <Link to="/contact" className="hover:font-semibold" onClick={handleToggleSidebar}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className=" md:flex items-center">
        {isLoggedIn ? (
          <button onClick={handleProfile} className="mx-4 text-3xl hover:text-gray-600 focus:outline-none">
            <FaCircleUser />
          </button>
        ) : (
          <Link to="/login" className="mx-4 text-lg hover:font-semibold focus:outline-double">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
