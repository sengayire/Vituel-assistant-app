
import React, {Component} from 'react'
import StateCity from './StateCity';
import {DropDownBtn} from '../Common'
import '../../assets/styles/dropDown.scss'


class DropDown extends Component {
    state = {
        clicked: false
    }
    handleClick = (e) => {
        e.preventDefault()
        const {clicked} = this.state;
        this.setState({
            clicked: !clicked,
            clickedBtn:  e.target.name 
        })
    }
    render(){
        const {clicked, clickedBtn} = this.state;
        return(
            <div>
               <div className="location-title">
                   <h5 className="title" >Select a location below to see beautiful entertainers across the Eros network!</h5> 
                   <button className="map-view-btn" >SWITCH TO MAP VIEW</button>
               </div>
               <div className="drop-down-container">
               <span className="usa-location">
                   <DropDownBtn btnName="usa" clicked={(e) => this.handleClick(e)} location={"United States"} btnClassName={"usa-location-btn" }/>
               </span>
               {
                 clicked && clickedBtn === 'usa' ? <div> <StateCity locationName={clickedBtn}/> </div> : ''
             }
               <span className="location-others">
               <DropDownBtn btnName="canada" clicked={(e) => this.handleClick(e)} location={"Canada"} btnClassName={"other-location-btn"}/>
               <DropDownBtn btnName="italy" clicked={(e) => this.handleClick(e)} location={"Italy"}  btnClassName={"other-location-btn"}/>
               <DropDownBtn btnName="uk" clicked={(e) => this.handleClick(e)} location={"United Kingdom"}  btnClassName={"other-location-btn"}/>
               </span>
               {
                 clicked && clickedBtn !== 'usa' ? <div> <StateCity locationName={clickedBtn}/> </div> : ''
             }
               </div>

            </div>
        );
    }
    };

export default DropDown;