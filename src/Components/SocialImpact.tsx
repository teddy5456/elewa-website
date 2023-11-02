import React from 'react'
import './SocialImpact.css'

function SocialImpact() {
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
    </div>
  )
}

export default SocialImpact
