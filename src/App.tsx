import React from 'react';
import SocialImpact from './Components/SocialImpact';
import './App.css';

function App() {
  return (
    <div className='main-page'>
      <div className='opacity'></div>
      <div><img className='background-image' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg' alt='background'></img></div>
        <SocialImpact />
    </div>
  );
}

export default App;
