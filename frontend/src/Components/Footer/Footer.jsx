import React from 'react'
import './Footer.css'
import facebook from '../Assets/facebook_icon.png'
import linkedin from '../Assets/linkedin_icon.png'
import twitter from '../Assets/twitter_icon.png'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>Rimberio Fashion</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti optio amet quia explicabo, voluptatum temporibus iste exercitationem quidem praesentium, commodi fugiat, sunt aut? Voluptatem soluta rem laboriosam vero velit?</p>
            <div className="footer-social-icons">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@rimberio.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Rimberio.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
