import React, {useState} from 'react';
import {RxCross1} from 'react-icons/rx';
import './Navbar.css';

import {images} from '../../constants'

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
     <a className='logo' alt="logo" >António Simões</a>
    </div>
    <div className='app__navbar-login'>
    <img src={images.etiqueta4} className='menu-imagem'  color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

    {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen_links'>
      <li className='p__opensans'><a href='#sobremim'><img src={images.etiqueta1} className='li-etiquetas' alt="header img" onClick={() => setToggleMenu(false)} /></a></li>
      <li className='p__opensans'><a href='#trabalhos'><img src={images.etiqueta2} className='li-etiquetas2' alt="header img" onClick={() => setToggleMenu(false)}/></a></li>
      <li className='p__opensans'><a href='#contactos'><img src={images.etiqueta3} className='li-etiquetas' alt="header img" onClick={() => setToggleMenu(false)}/></a></li>
       </ul>
      </div>
     )}
     <div />
     </div>
     <div className='app__navbar-smallscreen'>
      <img src={images.etiqueta4} className='menu-imagem'  color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

{toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen_links'>
      <li className='p__opensans'><a href='#sobremim'><img src={images.etiqueta1} className='li-etiquetas' alt="header img" onClick={() => setToggleMenu(false)}/></a></li>
      <li className='p__opensans'><a href='#trabalhos'><img src={images.etiqueta2} className='li-etiquetas2' alt="header img" onClick={() => setToggleMenu(false)}/></a></li>
      <li className='p__opensans'><a href='#contactos'><img src={images.etiqueta3} className='li-etiquetas' alt="header img" onClick={() => setToggleMenu(false)}/></a></li>
       </ul>
      </div>
     )}
     </div>
  </nav>
 )
}
export default Navbar;
