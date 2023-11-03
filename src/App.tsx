import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SocialImpact from './Components/SocialImpact';
import About from './Components/About';
import './App.css';

function App() {
  return (
    <div className='main-page'>
      <div className='opacity'></div>
      <div><img className='background-image' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg' alt='background'></img></div>
        <Router>
          <Routes>
            <Route path='/' element={<SocialImpact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
