import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import HiringPage from './pages/HiringPage';
import LoginPage from './pages/LoginPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/services/:servicesId" element={<ServiceDetailPage />} />
        <Route path="/services" element={<ServiceDetailPage />} />
        <Route path="/hiring" element={<HiringPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
