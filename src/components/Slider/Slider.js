import React from 'react';
import '../../assets/styles/slider.scss';
import { ImageContainer } from '../Common';
import {SamplePrevArrow} from '../Common';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {  faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const Sliders = () => {
    var settings = {
        infinite: true,
        useCSS: true,
        speed: 500,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SamplePrevArrow icon={faChevronRight} className="slider-arrow-right" onClick={() => (console.log('yeees'))}/>,
        prevArrow:  <SamplePrevArrow icon={faChevronLeft}/>
      };
    return (
        <div className="slider-container">
            <div className="slider-images-container">
            <Slider {...settings}>
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
        </Slider>
            </div>
        </div>
    )
}

export default Sliders