import React, { useState, useEffect } from 'react';
import './SocialImpact.css';
import imagesData from '../Assets/images.json';

function SocialImpact() {
  const [images, setImages] = useState(imagesData.images);

  // Variables for text content
  const headerText = 'Scaling Impact. Beyond the norm';
  const heroTitle = 'Human and Environmental Impact through Social Enterprise';

  // Statistics variables
  const peopleTrained = '733+';
  const careersLaunched = '733k';
  const projectsFinished = '200+';
  const investors = '56';

  // Business section text content variables
  const businessTitle = '(Social) business for the win';
  const businessDescription = 'With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive, and scalable business. The rest will take care of itself.';

  // Mindset section text content variables
  const mindsetTitle = 'A cooperative mindset';
  const mindsetDescription = 'Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active.';

  // Beyond business text content variables
  const beyondTitle = 'Beyond business';
  const beyondDescription = 'We channel a good amount of our resources into giving back. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers. These projects don\'t necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term.';

  // Project section text content
  const projectSectionTitle = 'Some of our impact projects';

  // Render the component
  return (
    <div className='page'>
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
              <li><a href='/invest'>Invest</a></li>
              <li><a href='#'>Venture Labs</a></li>
              <li><a href='#'>Brands</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

       {/* this is the beginning of the hero section of the social impact page */}

      <div className='social-impact-hero-section'>
        <h2 className='scaling'>{headerText}</h2>
        <h1 className='title-hero'>{heroTitle}</h1>
      </div>


      {/* this is where the statistics start */}

      <div className='social-business-section1'>
        <div className='area2'>
          <div className='stats-area'>
            <div>
              <h1>{peopleTrained}</h1>
              <h2>People trained</h2>
            </div>
            <div>
              <h1>{careersLaunched}</h1>
              <h2>careers launched</h2>
            </div>
            <div>
              <h1>{projectsFinished}</h1>
              <h2>Projects finished</h2>
            </div>
            <div>
              <h1>{investors}</h1>
              <h2>Investors</h2>
            </div>
          </div>
        </div>



          {/* This are some in-depth statistics with imaging */}

        <div className='social-business-section-info'>
          <img className='social-img' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg'></img>
          <div className='social-description'>
            <h1 className='social-business-title'>{businessTitle}</h1>
            <p className='social-business-description'>{businessDescription}</p>
          </div>
        </div>
      </div>

      <div className='right-section'>
        <div className='mindset-picture-text'>
          <div className='mindset-text'>
            <h1 className='social-business-title mindseth1'>{mindsetTitle}</h1>
            <p className='social-business-description mindsetp'>{mindsetDescription}</p>
          </div>
          <div>
            <img className='mindset-picture1' src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"></img>
          </div>
        </div>
      </div>

      <div className='social-business-section-info beyond-business'>
        <img className='social-img' src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"></img>
        <div className='mindset-text'>
          <h1 className='social-business-title beyond-title'>{beyondTitle}</h1>
          <p className='social-business-description beyond-description'>{beyondDescription}</p>
        </div>
      </div>

      <div className='right-section open-knowledge'>
        <div className='mindset-picture-text'>
          <div className='mindset-text'>
            <h1 className='social-business-title mindseth1'>{mindsetTitle}</h1>
            <p className='social-business-description mindsetp'>{mindsetDescription}</p>
          </div>
          <div >
            <img className='mindset-picture1' src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"></img>
          </div>
        </div>
      </div>



      {/* Project section starts here */}

      <div className='project-section'>
        <div className='project-section-title'>
          <h1>{projectSectionTitle}</h1>
        </div>
      </div>

      <div className='project-section-banner'>
        <div className='slider-container'>
          <div className='slider'>
            {images.map((image, index) => (
              <div key={index} className='slide'>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='social-impact-conclusion'>
        <h1>Become part of our mission <span className='new-line'>and <span className='join-btn'>join elewa.</span></span> </h1>
      </div>

      <div className='social-impact-footer'>
        <div className='footer-inner'>
            <div className='social-impact-footer-contacts'>
                <div className='Headquartes footer-divs'>
                    <h2>Headquarters</h2>
                    <p>The Promenade, 19 General <br></br> Mathenge Rd <br></br> Nairobi, Kenya</p>
                </div>
                <div className='contacts footer-divs'>
                    <h2>Contacts</h2>
                    
                    <p>T +254 78 92 27 755 <br></br> E info@elewa.ke</p>
                </div>
                <div className='navigation footer-divs'>
                    <h2>Navigation</h2>
                    <p>About us</p>
                    <p>Social<br></br>impact</p>
                    <p>Invest</p>
                    <p>News</p>
                    <p>Contact</p>
                </div>
                <div  className='brands footer-divs'>
                    <h2>Brands</h2>
                    <p>Elewa</p>
                    <p>Italata</p>
                    <p>Venture labs</p>
                </div>
                <div className='privacy footer divs'>
                    <h2>Privacy</h2>
                    <p>Terms and<br></br>conditions</p>
                    <p>Cookie preferences</p>
                </div>
            </div>
            <div className='social-impact-footer-logo'>
                <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg'></img>
                <div className='social-media-icons'>
                    <div>
                        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg'></img>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg'></img>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg'></img>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SocialImpact;
