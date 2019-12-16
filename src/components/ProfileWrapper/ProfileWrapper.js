import React from 'react';
import ImageSlider from '../ImageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import '../../assets/styles/profile-wrapper.scss';
import AboutEscort from '../AboutEscorts/AboutEscorts';
const ProfileWrapper = () => {
    return(
    <div className="profile-container">
        <div className="profile-info-container">
          <div className="profile-header">
              <div className="escort-info">
             <h4 className="escort-name">AILI XPOSED</h4> 
             <span><h4>Eros Verified</h4></span>
              </div>
          <div className="escort-location"><span>
              <p>
                  Escort in Arizona
              </p>
              </span></div>
          </div>
          <div className="escort-contact">
              <div><span><FontAwesomeIcon icon={faPhoneAlt} style={{color: 'white'}}/></span> <h4>
                  4804200298
                  </h4>
                  </div>
                  <div><span><FontAwesomeIcon icon={faEnvelope} style={{color: 'white'}}/></span>
                  <p href="">
                  ailixposed@pm.me   
                  </p>
                  </div>
          </div>
      </div>
          <div className="image-slider-container">
            <ImageSlider />
          </div>
          <div className="about-escort">
  <AboutEscort />
          </div>
      </div>
    )
}

export default ProfileWrapper;