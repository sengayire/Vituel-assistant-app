import React from 'react';
import ImageSlider from '../ImageSlider';
import '../../assets/styles/profile-wrapper.scss';
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
              <span>
                  <h4>
                  4804200298
                  </h4>
              </span>
              <span>
                  <p href="">
                  ailixposed@pm.me   
                  </p>
              </span>
          </div>
      </div>
          <div className="image-slider-container">
            <ImageSlider />
          </div>
      </div>
    )
}

export default ProfileWrapper;