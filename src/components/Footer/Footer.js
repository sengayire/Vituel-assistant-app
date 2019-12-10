import React from 'react';
import '../../assets/styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import rtaLogo from '../../assets/images/rta.png'
import splashAsacp from '../../assets/images/splashAsacp.gif'
// import footerBg from '../../assets/images/footer-bg.png';

const Footer = () => (
    <div className="footer-items-container">
    <div className="footer-container">
        <div className="footer-list">
  <ul>
  <span className="footer-content-header">Legal</span>
      <li>
      {'  '}Privacy
      </li>
      <li>
      {" "}Terms & Conditions 
      </li>
      <li>
      {" "}Advertiser agreement
      </li>
      <li>
      {" "}About Eros/Ads
      </li>
      <li>
      {" "}2257 Exemption
      </li>
      <li>
      {" "}DMCA/Photo Complaints
      </li>
      <li>
      {" "}TradeMarks/IP
      </li>
      <li>
      {" "}Report trafficking
      </li>
      <li>
      {" "}Law enforcement
      </li>
      <li>
      {" "}Eros Verified
      </li>
  </ul>
  </div>

  <div className="footer-list">
  <ul>
  <span  className="footer-content-header">Resources</span>
      <li>
       {' '}Advertise with Eros
      </li>
      <li>
       {' '}Contact Eros
      </li>
      
  </ul>
  </div>

  <div className="social-container">
   <span  className="footer-content-header">Social</span>
  <div className="social-footer-container">
      <span>
         <FontAwesomeIcon icon={faTwitter} /> Eros on Twitter
      </span>
      <div className="social-content">
      <p>Eros &#174; Eros.com &#174; The Ultimate <br /> 
      Guide to Escorts adn Erotic <br />
      Entertainment &#174;</p> 
      <p>The Ultimate Guide To Erotic <br /> Entertainment &#174;</p>
      <p>ErosGuide &#174; Eros Guide &#174; <br />Erosguide.com &#174;</p>
      <p>&#169; 1997 - 2017 MPF Media Services <br /> GmbH </p>
      </div>
  </div>
  </div>
    </div>
  <div  className="footer-splashes">
      <span>
      <img src={splashAsacp} alt="" />  
      <img src={rtaLogo} alt="" /> </span>  
  </div>
    </div>

) 

export default Footer;