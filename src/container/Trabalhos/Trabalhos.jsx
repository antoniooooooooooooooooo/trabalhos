import React, {useState} from 'react';
import {RxCross1} from 'react-icons/rx';
import {images} from '../../constants';
import './Trabalhos.css';

const Trabalhos = () => {
const [toggleMenu1, setToggleMenu1] = useState(false);
const [toggleMenu2, setToggleMenu2] = useState(false);
const [toggleMenu3, setToggleMenu3] = useState(false);
const [toggleMenu4, setToggleMenu4] = useState(false);
const [toggleMenu5, setToggleMenu5] = useState(false);
const [toggleMenu6, setToggleMenu6] = useState(false);
const [toggleMenu7, setToggleMenu7] = useState(false);
const [toggleMenu8, setToggleMenu8] = useState(false);
const [toggleMenu9, setToggleMenu9] = useState(false);
return (
<div className='app__header1 app__wrapper section__padding' id='trabalhos'>
        <div className='app__wrapper_img1'>
        <img src={images.trabalho1} className='trabalho_img' alt="trabalho1" onClick={() => setToggleMenu1(true)}/>
        {toggleMenu1 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu1(false)}/>
      <img src={images.trabalho1} className='video_img' alt="trabalho1"/>
      </div>
     )}
        <img src={images.trabalho2} className='trabalho_img' alt="trabalho2" onClick={() => setToggleMenu2(true)}/>
        {toggleMenu2 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu2(false)}/>
      <video src={images.video2} className='video_img' autoPlay loop alt="trabalho2"/>
      </div>
     )}
        <img src={images.trabalho3} className='trabalho_img' alt="trabalho3" onClick={() => setToggleMenu3(true)}/>
        {toggleMenu3 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu3(false)}/>
      <video src={images.video3} className='video_img' autoPlay loop alt="trabalho3"/>
      </div>
     )}
        <img src={images.trabalho4} className='trabalho_img' alt="trabalho4" onClick={() => setToggleMenu4(true)}/>
        {toggleMenu4 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu4(false)}/>
      <video src={images.video4} className='video_img' autoPlay loop alt="trabalho4"/>
      </div>
     )}
        <img src={images.trabalho5} className='trabalho_img' alt="trabalho5" onClick={() => setToggleMenu5(true)}/>
        {toggleMenu5 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu5(false)}/>
      <video src={images.video5} className='video_img' autoPlay loop alt="trabalho5"/>
      </div>
     )}
        <img src={images.trabalho6} className='trabalho_img' alt="trabalho6" onClick={() => setToggleMenu6(true)}/>
        {toggleMenu6 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu6(false)}/>
      <img src={images.trabalho6} className='video_img'alt="trabalho6"/>
      </div>
     )}
        <img src={images.trabalho7} className='trabalho_img' alt="trabalho7" onClick={() => setToggleMenu7(true)}/>
        {toggleMenu7 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu7(false)}/>
      <img src={images.trabalho7} className='video_img' alt="trabalho7"/>
      </div>
     )}
        <img src={images.trabalho8} className='trabalho_img' alt="trabalho8" onClick={() => setToggleMenu8(true)}/>
        {toggleMenu8 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu8(false)}/>
      <img src={images.trabalho8} className='video_img' alt="trabalho8"/>
      </div>
     )}
        <img src={images.trabalho9} className='trabalho_img' alt="trabalho9" onClick={() => setToggleMenu9(true)}/>
        {toggleMenu9 && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu9(false)}/>
      <video src={images.video9} className='video_img' autoPlay loop alt="trabalho9"/>
      </div>
     )}
      </div>
    </div>
  )
  }
  
  export default Trabalhos;
  