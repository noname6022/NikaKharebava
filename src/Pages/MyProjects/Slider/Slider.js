import React, { Component, useState } from "react";
import Slider from "react-slick";
import './SliderStyles.css';
import ATM from './ImagesCollection/ATM.webp';
import ATMMobile from './ImagesCollection/ATMMobile.webp';
import ARG from './ImagesCollection/ARG.webp';
import ARGMobile from './ImagesCollection/ARGMobile.webp';
import VND from './ImagesCollection/VND.webp';
import VNDMobile from './ImagesCollection/VNDMobile.webp';
import DE from './ImagesCollection/DE.webp';
import DEMobile from './ImagesCollection/DEMobile.webp';
import DEDashoard from './ImagesCollection/DEDashoard.webp';
import DEDashboardMobile from './ImagesCollection/DEDashboardMobile.webp';
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
              <a href="https://atmosprotocol.com/"  target="_blank">
                <img src={ATMMobile} className="SlideImages"/>
                </a>
                </MediaQuery>
              <MediaQuery minWidth={481}>
              <a href="https://atmosprotocol.com/"  target="_blank">
                <img src={ATM} className="SlideImages"/>
                </a>
                </MediaQuery>
                <a href="https://atmosprotocol.com/" className="SlideLink" target="_blank">Atmos Protocol</a>
              </div>


              <div className="Slides">
              <MediaQuery maxWidth={480}>
              <a href="https://www.argano.io/" target="_blank">
                <img src={ARGMobile} className="SlideImages"/>
                </a>
                </MediaQuery>
              <MediaQuery minWidth={481}>
              <a href="https://www.argano.io/" target="_blank">
                <img src={ARG} className="SlideImages"/>
                </a>
                </MediaQuery>
                <a href="https://www.argano.io/" className="SlideLink" target="_blank">Argano</a>
              </div>

              <div className="Slides">
              <MediaQuery maxWidth={480}>
              <a href="https://vineyarddao.netlify.app/" target="_blank">
                <img src={VNDMobile} className="SlideImages"/>
                </a>
                </MediaQuery>
              <MediaQuery minWidth={481}>
              <a href="https://vineyarddao.netlify.app/" target="_blank">
                <img src={VND} className="SlideImages"/>
                </a>
                </MediaQuery>
                <a href="https://vineyarddao.netlify.app/" className="SlideLink" target="_blank">Vineyard DAO</a>
              </div>

              <div className="Slides">
              <MediaQuery maxWidth={480}>
              <a href="https://dubbledex.com/" target="_blank">
                <img src={DEMobile} className="SlideImages"/>
                </a>
                </MediaQuery>
              <MediaQuery minWidth={481}>
              <a href="https://dubbledex.com/" target="_blank">
                <img src={DE} className="SlideImages"/>
                </a>
                </MediaQuery>
                <a href="https://dubbledex.com/" className="SlideLink" target="_blank">Dubble Exchange</a>
              </div>

              <div className="Slides">
              <MediaQuery maxWidth={480}>
              <a href="https://app.dubbledex.com/" target="_blank">
                <img src={DEDashboardMobile} className="SlideImages"/>
                </a>
                </MediaQuery>
              <MediaQuery minWidth={481}>
              <a href="https://app.dubbledex.com/" target="_blank">
                <img src={DEDashoard} className="SlideImages"/>
                </a>
                </MediaQuery>
                <a href="https://app.dubbledex.com/" className="SlideLink SlideLinklong" target="_blank">Dubble Exchange dashboard</a>
              </div>
              
              
            </Slider>
          </div>
        );
      }
    }