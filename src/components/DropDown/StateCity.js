import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StateCity = ({locationName}) =>  { 
    console.log('clickedBtn', locationName)
    return(
 <div className="states-dropDown">
 { locationName === 'usa' ? 
(<ul>
    <li><FontAwesomeIcon icon={faChevronRight} color="white"/>Alabama</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>Alabama</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>Alabama</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>Alabama</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>Alabama</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>Alabama</li> 
    </ul>)
    : locationName === 'canada' ?
    (<ul>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>kakatu</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>kakatu</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>kakatu</li>
    </ul>)
    : locationName === 'italy' ?
    (<ul>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>kemba</li>
    <li><FontAwesomeIcon icon={faChevronRight} color="gray"/>kemba</li>
</ul>)
    : '' }
</div>
)
}
export default StateCity;