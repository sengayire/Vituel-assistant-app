import React from 'react';
import '../../assets/styles/imagePagination.scss'

const ImagePagination = () => {
    return (
        <div className="image-pagination-container">
        <h5>Meet our selection of world wide escorts</h5>
        <div className="pagination">
            <div className="list-display">
            <span  className="list-display">Display</span>
            </div>
        <div className="select-pagination">
            
                <div className="list-icon"> 
                    <span className="as-list-Icon"></span>
                    <span className="as-list-Icon"></span> 
                </div>
                <div className="display-text">
                <span >as list</span>
                </div>
        </div>
        <div className="select-pagination">
            <div className="four-list-icon">
                   <span className="as-four-list-Icon"></span>
                   <span className="as-four-list-Icon"></span>
                   <span className="as-four-list-Icon"></span>
                   <span className="as-four-list-Icon"></span>
                </div>
                <div>
                <span className="display-text">4 on a row</span>
                </div>
        </div>
        <div className="select-pagination">
            <div className="six-list-Icon">
                   <span className="as-six-list-Icon"></span>
                   <span className="as-six-list-Icon"></span>
                   <span className="as-six-list-Icon"></span>
                   <span className="as-six-list-Icon"></span>
                   <span className="as-six-list-Icon"></span>
                   <span className="as-six-list-Icon"></span>
                </div>
                <div className="display-text">
                <span>6 on a row</span>
                </div>
        </div>
      </div>
      </div>
    )

};

export default ImagePagination;