import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        You can always contact me on social media or my personal G-Mail
        </p>
        <p className='footer-subscription-text'>
            bharatekarhade@gmail.com
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class="fas fa-code"></i>
            <p> code/game </p>
            <i class="fas fa-gamepad"></i>
            </Link>
          </div>
          <div class='social-icons'>
            <a href = "https://www.facebook.com/bharatbhushan.karhade" 
            target= "_blank"
            className = "social-icon-link facebook" aria-label = 'Facebook'>
              <i class='fab fa-facebook-f' />
              </a>
            
              <a href = "https://www.instagram.com/mrm3anor" 
            target= "_blank"
            className = "social-icon-link instagram" aria-label = 'Instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a href = "https://www.youtube.com/channel/UCaqnSwav0t1NwhEUDniBgqg" 
            target= "_blank"
            className = "social-icon-link youtube" aria-label = 'Youtube'>
              <i class='fab fa-youtube' />
            </a>
            <a href = "https://www.twitter.com/bharatkarhade" 
            target= "_blank"
            className = "social-icon-link twitter" aria-label = 'Twitter'>
              <i class='fab fa-twitter' />
            </a>
            <a href = "https://www.linkedin.com/in/bharatbh" 
            target= "_blank"
            className = "social-icon-link linkedin" aria-label = 'Linkedin'>
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;