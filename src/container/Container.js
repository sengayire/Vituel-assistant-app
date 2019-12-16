import React from 'react';
import '../assets/styles/container.scss';
const Container = ({children}) => {

    return(
        <div className="main-container">
         {children}
        </div>
    )
}

export default Container;