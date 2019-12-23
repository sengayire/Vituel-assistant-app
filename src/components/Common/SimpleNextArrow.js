import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SamplePrevArrow = (props) => {
    const { className, onClick, icon } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={icon}
               style={{color: 'white', fontSize: '40px'}}
            />
        </div>
    );
}

export default SamplePrevArrow;