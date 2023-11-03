import React, { useState } from 'react';
import './About.css'
import membersData from '../Assets/members.json';

function About() {
  const [members, setData] = useState(membersData.members);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
  };

  const handleMoveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
  };

  
  
  return (
    <div>
      <div className='opacity'></div>
      <img
        className='background-image'
        src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg'
        alt="Background"
      ></img>
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
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='/about'>About us</a>
              </li>
              <li>
                <a href='/'>Social Impact</a>
              </li>
              <li>
                <a href='#'>Invest</a>
              </li>
              <li>
                <a href='#'>Venture Labs</a>
              </li>
              <li>
                <a href='#'>Brands</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='about-hero-section'>
        <h2 className='scaling'>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>
        <h1 className='title-hero'>
          Dependable, Creative, Supportive, Open Minded and Fun*
        </h1>
      </div>

      <div className='curve'>
        <div className='we-care-section'>
          <div className='we-care-section-inner'>
            <h1>We Care!</h1>
            <div className='we-care-paragraph'>
              <p className='we-care-p1'>
                Elewa is a mission-driven organization. We make use of our
                cooperative and shared culture to drive the needle for the
                development of people and environment. We care about our growth,
                but also care deeply about the context surrounding us.
              </p>
              <p className='we-care-p2'>
                Our investments are therefore not limited to internal ones, but
                contribute heavily to our community and environment. From
                training the next scout leaders on sustainable practices, to
                bridging the employment gap for junior software developers.
              </p>
            </div>
            <div className='we-care-icons-text'>
              <div className='we-care-icotext'>
                <div className='we-care-infinity'>
                  <img
                    src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png'
                    alt='Holistic Solutions'
                  ></img>
                  <h2>Holistic Solutions</h2>
                  <p>
                    We go beyond a simple patch-up but develop lasting solutions
                    through holistic design.
                  </p>
                </div>
                <div>
                  <img
                    src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png'
                    alt='Impact'
                  ></img>
                  <h2>Impact</h2>
                  <p>
                    Impact as a direct, or indirect, result. All our respective
                    organizations have underlying theories of change.
                  </p>
                </div>
                <div>
                  <img
                    src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png'
                    alt='Open Data'
                  ></img>
                  <h2>Open Data</h2>
                  <p>
                    Sharing is caring. We share what we learn. As proof, we've
                    open-sourced all our internal projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='team-management-section'>
        <div className='team-inner'>
          <div>
            <h1>
              Team | <span className='management'>Management</span>
            </h1>
          </div>
          <div className='belt-slide'>
            {members.map((member, index) => (
              <div key={index} className='member-belt'>
                <img
                  src={member.imageURL}
                  alt={`Member ${index + 1}`}
                />
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className='belt-buttons'>
            <button onClick={handleMoveLeft}>Previous</button>
            <button onClick={handleMoveRight}>Next</button>
          </div>
        </div>
      </div>


      <div className='culture-section'>
        <div className='culture-section-inner'>
            <div className='culture-section-title'>
                <h1>Our Cultures & Values</h1>
                <p>Our culture, <span className='italic-codeT'>CODE-(T)</span>, defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission.</p>
            </div>
            <div className='culture-section-code '>
                <div className='code-box left'>
                    <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png'></img>
                    <h2>Cooperative</h2>
                    <p>One for all ,all for one! We have a cooperative and open mindset. If one of us grows, all will follow.</p>
                </div>
                <div className='code-box right'>
                    <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png'></img>
                    <h2>Ownership</h2>
                    <p>We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe.</p>
                </div>
                <div className='code-box left'>
                    <img src="https://static.thenounproject.com/png/1721983-200.png"></img>
                    <h2>Detail</h2>
                    <p>We are a "Centre of Excellence" as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival.</p>
                </div>
                <div className='code-box right'>
                    <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png'></img>
                    <h2>Empathy</h2>
                    <p>We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need.</p>
                </div>
                <div className='code-box bottom'>
                    <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png'></img>
                    <h2>Transparency</h2>
                    <p>Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within.</p>
                </div>

            </div>
        </div>
      </div>
    

        <div className='map-italanta'>
            <div className='map-italanta-inner'>
                <div className='map-section'>
                    <img src='https://www.google.com/maps/d/thumbnail?mid=1czpmSF_G5TpiNqH0CYkRvgqNG6E&hl=en'></img>
                </div>
                <div className='map-paragraph'>
                    <h2>How to get there</h2>
                    <p>Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.</p><br></br><br></br>
                    <p>Not in town?Teams, meets or zoom are our second name. Book an appointment today via <span>contact@elewa.ke</span></p>
                </div>
            </div>
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

export default About;
