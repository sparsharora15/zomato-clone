import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="Lower">
        <div className="logo">
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" srcset="" />
        </div>
        <div className="lowerDetails">

          <div className="firstCol">

            <div className="col">

              <p>ABOUT ZOMATO</p>
              <ul>
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col">
              <p>

                ZOMAVERSE.
              </p>
              <ul>
                <li>ZOMAVERSE</li>
                <li>Zomato</li>
                <li>Blinkit</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Zomaland</li>
              </ul>
            </div>
          </div>

          <div className="secondCol">

            <div className="col"> <p> FOR RESTAURANTS</p>
              <ul>
                <li>Partner With Us</li>
                <li>Apps For You</li>
                <li></li>
                <li></li>
                <li><b style={{ 'color': 'black' }}>FOR ENTERPRISES</b></li>
                <li>Zomato For Work</li>
              </ul>
            </div>
            <div className="col"><p>LEARN MORE </p>
              <ul>
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="col"><p style={{ 'marginLeft': '25px' }}>SOCIAL LINKS </p>
              <div className='LOGOS'>
                <img src={require('./Untitled.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="last">
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>

        </div>
      </div>
    </>
  )
}

export default Footer
