import React from 'react';
import './About.css'

function About() {
  return (
    <div>
        <div className='opacity'></div>
        <img className='background-image' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg'></img>
      <div className='header2'>
        <div className='nav-header light-border'>
          <img
            className='logo'
            src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg'
            alt='logo'
          ></img>
          <div>
        {/* this is the menu and some items for the navbar */}
            <ul className='nav-items'>
              <li><a href='#'>Home</a></li>
              <li><a href='/about'>About us</a></li>
              <li><a href='/'>Social Impact</a></li>
              <li><a href='#'>Invest</a></li>
              <li><a href='#'>Venture Labs</a></li>
              <li><a href='#'>Brands</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>



      <div className='about-hero-section'>
        <h2 className='scaling'>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>
        <h1 className='title-hero'>Dependable, Creative, Supportive, Open Minded and Fun*</h1>
      </div>


        <div className='we-care-section'>
            <div className='we-care-section-inner'>
                <h1>We Care!</h1>
                <div className='we-care-paragraph'>
                    <p className='we-care-p1'>Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.</p>
                    <p className='we-care-p2'>Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.</p>
                </div>
                <div className='we-care-icons-text'>
                    <div className='we-care-icotext'>
                        <div className='we-care-infinity'>
                            <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png'></img>
                            <h2>Holistic Solutions</h2>
                            <p>We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png'></img>
                            <h2>Impact</h2>
                            <p>Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
                        </div>
                        <div>
                            <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png'></img>
                            <h2>Open Data</h2>
                            <p>Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  );
}

export default About;
