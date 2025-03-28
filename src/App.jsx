import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom'; 
import Navigation from './components/Navigation'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

function App() {
  const navigate = useNavigate(); 
  const [userId, setUserId] = useState(1); 

  
  const navigateToProfile = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <Navigation />

      
      <button onClick={navigateToProfile}>Go to User Profile {userId}</button>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
