import React, { Component, useState } from "react";
import Slider from "react-slick";
import './SliderStyles.css';
import ATM from './ImagesCollection/ATM.png';
import ATMMobile from './ImagesCollection/ATMMobile.png';
import RightArrow from './ImagesCollection/ArrowRight.svg';
import LeftArrow from './ImagesCollection/ArrowLeft.svg';
import MediaQuery from 'react-responsive'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className='rightArrow'
        onClick={onClick}
      ><img src={RightArrow } className='Arrow'/> </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='LeftArrow'
        onClick={onClick}
      ><img src={LeftArrow} className='Arrow'/> </div>
    );
  }

export default class SlideShow extends Component {
    
  render() {
    
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        };
        return (
          <div className="SliderWrapper">
            <Slider {...settings}>
              <div className="Slides">
              <MediaQuery maxWidth={480}>
                <img src={ATMMobile} className="SlideImages"/>
                </MediaQuery>
              <MediaQuery minWidth={481}>
                <img src={ATM} className="SlideImages"/>
                </MediaQuery>
                <a href="https://atmosprotocol.com/" className="SlideLink">Atmos Protocol</a>
              </div>
              <div className="Slides">
              <MediaQuery maxWidth={480}>
                <img src={ATMMobile} className="SlideImages"/>
                </MediaQuery>
              <MediaQuery minWidth={481}>
                <img src={ATM} className="SlideImages"/>
                </MediaQuery>
                <a href="https://atmosprotocol.com/" className="SlideLink">Orcus Finance</a>
              </div>
              
            </Slider>
          </div>
        );
      }
    }