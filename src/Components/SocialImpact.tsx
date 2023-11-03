import React, {useState, useEffect} from 'react'
import './SocialImpact.css'
import imagesData from '../Assets/images.json'; // Import the JSON file


function SocialImpact() {
    const [images, setImages] = useState(imagesData.images);
  


  return (
    // This is the header section of the social impact page
    <div className='page'>
            <div className='header2'>
                <div className='nav-header light-border'>
                    <img className='logo' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg' alt='logo'></img>
                    <div>
                    <ul className='nav-items'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Social Impact</a></li>
                    <li><a href='#'>Invest</a></li>
                    <li><a href='#'>Venture Labs</a></li>
                    <li><a href='#'>Brands</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Contact</a></li>
                    </ul>
                    </div>
                </div>
            </div>

     {/* This is the hero section for the social impact page */}
        <div className='social-impact-hero-section'>
                <h2 className='scaling'>Scaling Impact. Beyond the norm</h2>
                <h1 className='title-hero'>Human and Environmental Impact through Social Enterprise</h1>
        </div>

    {/* this is the social business section */}
    <div className='social-business-section1'>
        <div className='area2'>
            <div className='stats-area'>
                    <div>
                        <h1>733+</h1>
                        <h2>People trained</h2>
                    </div>
                    <div>
                        <h1>733k</h1>
                        <h2>careers launched</h2>
                    </div>
                    <div>
                        <h1>200+</h1>
                        <h2>Projects finished</h2>
                    </div>
                    <div>
                        <h1>56</h1>
                        <h2>Investors</h2>
                    </div>
                </div>
            </div>

            <div className='social-business-section-info'>
                <img className='social-img' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg'></img>
                <div className='social-description'>
                <h1 className='social-business-title'>(Social) business for the win</h1>
                <p className='social-business-description'>With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.</p>
            </div>
            </div>
        </div>


        {/* this is the mindset part of the page */}
        <div className='right-section'>
            <div className='mindset-picture-text'>
                <div className='mindset-text'>
                    <h1 className='social-business-title mindseth1'>A cooperative mindset</h1>
                    <p className='social-business-description mindsetp'>Elewa has one shared objective; To
                            unlock the true potential of individuals, teams, and the
                            community. We believe strongly in the power of 
                            sharing ideas and continuously strive to grow each other and ourselves. 
                            Internally, but also within the larger communities in which we are active.</p>
                </div>
                <div >
                    <img className='mindset-picture1' src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"></img>
                </div>
            </div>
        </div>



        <div className='social-business-section-info beyond-business'>
                <img className='social-img' src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"></img>
                <div className='mindset-text'>
                    <h1 className='social-business-title beyond-title'>Beyond business</h1>
                    <p className='social-business-description beyond-description'>We channel a good amount of our resources into giving back.
                        Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers  These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term.</p>
                </div>
            </div>

                {/* this is the mindset part of the page */}
                <div className='right-section open-knowledge'>
            <div className='mindset-picture-text'>
                <div className='mindset-text'>
                    <h1 className='social-business-title mindseth1'>Open Knowledge</h1>
                    <p className='social-business-description mindsetp'>Open knowledge
What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships.

We build for today, with a lens on tomorrow.</p>
                </div>
                <div >
                    <img className='mindset-picture1' src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"></img>
                </div>
            </div>
        </div>

        <div className='project-section'>
                            <div className='project-section-title'>
                    <h1>Some of our impact projects</h1>
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

    </div>
  )
}

export default SocialImpact
