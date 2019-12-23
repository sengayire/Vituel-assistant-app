import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {  faThumbtack, faLink, faCheckCircle, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faSnapchatGhost, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../../assets/styles/about-escort.scss'
const AboutEscort = () => (
    <div className="about-escort-container">
      <div className="about-me">
          <div className="about-me-container">
          <h5>ABOUT ME</h5> 
         <div>
             <p>Look no further. Your all natural tattoed beauty </p>
             <p>You have discerning taste, an appreciation for the rare and you know how to indulge </p>
             <p>Uniquely beautiful. One of a kind </p>
             <p>I live a healthy active lifestyle focusing on my body and mind during daily meditation and yoga. 
                 I live for the written word and can always be found writing down my own musing or getting lost in a book.
                  I love learning new things, what can you teach me? I am told I have a very soothing, relaxed presence.</p>
                  <p>
                      Get lost with me . get lost deep in conversation, exploration and pleasure. 
                      Dive in to our connection deeply. My looks have already caught your attention, 
                      my personality will keep you continually entranced   
                  </p>
                  <p>
                      Allow me to be you muse
                  </p>
                  <p>
                      I can't wait to feast on our connection; please text or email for more information. 
                  </p>
         </div>
          </div>
         
      </div>
      <div>
      <div className="my-details">
          <div className="details-container">
          <h5>MY DETAILS</h5>
 <table>
  <tr>
    <th>Gender:</th>
    <td>Female</td>
  </tr>
  <tr>
    <th>Age:</th>
    <td>31</td>
  </tr>
  <tr>
    <th>Ethnicity:</th>
    <td>Exotic</td>
  </tr>
  <tr>
    <th>Hair Color:</th>
    <td>Brunette</td>
  </tr>
  <tr>
    <th>Eye color:</th>
    <td>Brown</td>
  </tr>
  <tr>
    <th>Height:</th>
    <td>5'7"</td>
  </tr>
  <tr>
    <th>Measurements:</th>
    <td>32d - 25" - 36"</td>
  </tr>
  <tr>
    <th>Affiliation:</th>
    <td>Independent</td>
  </tr>
  <tr>
    <th>Available to:</th>
    <td>Couples, Men, Women</td>
  </tr>
  <tr>
    <th>Availability:</th>
    <td>Incall / Outcall</td>
  </tr>
</table>
 </div>
      </div>
      <div className="contact-details-container">
          <div className="contact-details">
              <h5>CONTACT DETAILS</h5>
              <span className="contact"><span><FontAwesomeIcon icon={faPhoneAlt} style={{color: 'white', marginRight: 5}}/></span><span>4804200298</span></span>
              <span className="contact"> <span><FontAwesomeIcon icon={faEnvelope} style={{color: '#ffffffb8', marginRight: 5}}/></span><span>ailixspasnosed@pm.me</span></span>
          </div>
      </div>

      <div className="social-media-links">
      <table>
  <tr>
    <th><FontAwesomeIcon icon={faTwitter}/></th>
    <td>My Twitter</td>
  </tr>
  <tr>
    <th><FontAwesomeIcon icon={faSnapchatGhost} /> </th>
    <td>My Snapchat</td>
  </tr>
  <tr>
    <th> <FontAwesomeIcon icon={faInstagram} /></th>
    <td>My Instagram</td>
  </tr>
  <tr>
    <th><FontAwesomeIcon icon={faThumbtack} /></th>
    <td>Bookmark my page</td>
  </tr>
  <tr>
    <th><FontAwesomeIcon icon={faLink} /></th>
    <td>view direct link</td>
  </tr>
  <tr>
    <th><FontAwesomeIcon icon={faCheckCircle} /></th>
    <td>Eros Verified</td>
  </tr>
  </table>
      </div>
      </div>
    </div>
)

export default AboutEscort;
