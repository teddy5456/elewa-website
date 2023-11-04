import React from 'react'
import './Invest.css'

function Invest() {
  return (
    <div>
      <img className='background-image' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg'></img>
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

      <div className='invest-hero-section'>
        <h2 className='scaling'>Trade, not aid</h2>
        <h1 className='title-hero'>Southern innovations addressing global problems</h1>
      </div>

      <div className='invest-info-section'>
        <div className='invest-info-section-inner'>
          <div className='invest-info-title'>
            <h1>How we see it differently</h1>
            <p>The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).</p>
          </div>
          <div className='invest-info-image'>
            <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png'></img>
          </div>
        </div>
      </div>


      <div className='figures-section'>
        <div className='figures-section-inner'>
          <h1>Key figures</h1>
          <div className='figure-section-table'>
                <div className='figure-cell'>
                  <h1>1.3<span>M</span></h1>
                  <p>Approx. number of Kenyan talents reaching the age of 18</p>
                </div>
                <div className='figure-cell'>
                  <h1>5<span>M</span></h1>
                  <p>number of East-Africans(EAC) reaching the age of 18 in 2022</p>
                </div>
                <div className='figure-cell'>
                  <h1>2022</h1>
                  <p>Democratic Republic of Congo joins the East African Community</p>
                </div>
                <div className='figure-cell'>
                  <h1>1.5<span>M</span></h1>
                  <p>Number of unfilled IT vacancies in the US aand EU</p>
                </div>
                <div className='figure-cell'>
                  <h1>10<span>M</span></h1>
                  <p>Number of technical vacancies by 2030</p>
                </div>
                <div className='figure-cell'>
                  <h1>2050</h1>
                  <p>Africa holds the worlds largest workforce</p>
                </div>
                <div className='figure-cell'>
                  <h1>$4.6<span>M</span></h1>
                  <p>Startup funding raised by African startups in 2022</p>
                </div>
                <div className='figure-cell'>
                  <h1>310<span>%</span></h1>
                  <p>Increase in startup funding for companies with HQ in Kenya</p>
                </div>
          </div>
        </div>
      </div>

      <div className='stakeholder-section left-image'>
          <div className='stakeholder-section-inner left-image-inner'>
              <div>
                <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png'></img>
              </div>
              <div className='stakeholder-text left-image-text'>
                <h1>Elewa NV, a multi-stakeholder cooperation</h1>
                <p>At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.</p>
                <p>Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.</p>
              </div>
                
          </div>
      </div>

      <div className='creative-hub-section right-image'>
          <div className='creative-hub-section-inner right-image-inner'>
          <div className='creative-hub-text right-image-text'>
                <h1>The Elewa Creative Hub</h1>
                <p>Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.</p>
                <p>Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.</p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"></img>
              </div>

                
          </div>
      </div>


      <div className='join-section left-image'>
          <div className='join-section-inner left-image-inner'>
              <div>
                <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg'></img>
              </div>
              <div className='join-text left-image-text'>
                <h1>Investing in Elewa NV</h1><br></br>
                <p>From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?</p>
                
              </div>
                
          </div>
      </div>


    </div>
  )
}

export default Invest
