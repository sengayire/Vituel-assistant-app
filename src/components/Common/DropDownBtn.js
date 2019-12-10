import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DropDownBtn = ({clicked, location, btnClassName, btnName }) => {
        return (
            
                <span>
                <button name={btnName} className={btnClassName}  onClick={clicked}>
                  <div className="location-name-btn">{location}</div>
                  <div className={"drop-down-icon"} > <FontAwesomeIcon icon={faChevronRight}/></div>
                </button>
                   </span>
        )
    }

export default DropDownBtn;