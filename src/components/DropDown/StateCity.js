import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as cities from '../../helpers/constants/stateAndcities'
const StateCity = ({locationName}) =>  { 
  const {usa, canada} = cities;
    return(
 <div className="states-dropDown">
 { locationName === 'usa' ? 
(<ul>
    {usa.map(state => <li key={state.name}><FontAwesomeIcon icon={faChevronRight} color="white" style={{ marginRight: 5, marginTop: 10 }}/>{state.name}</li>)}
    </ul>)
    : locationName === 'canada' ?
    (<ul>
        {canada.map(city =><li><FontAwesomeIcon icon={faChevronRight} color="white" style={{ marginRight: 5, marginTop: 10 }}/>{city.name}</li> )}
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