import React from 'react';

import {images} from '../../constants';
import './SobreMim.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='sobremim'>
    <div className='app__wrapper_img'>
     <img src={images.perfil} className='imagem_perfil' alt="header img"/>
    </div>
    <div className='app__wrapper_info'>
     <h1 className='app__header-h1'>António Simões é um designer gráfico com múltiplas valências</h1>
     <p className='p__popensans1'>Design gráfico, web design, edição de vídeo e modelação 3D são as áreas em que mais se destaca.</p>
     <br/>
     <p className='p__popensans'>Para além das suas habilitações ao nível da criação de conteúdos gráficos também tem conhecimento no ramo da produção musical.</p>
     <br/>
     <p className='p__popensans'>Encontra-se de momento a frequentar o curso de Tecnologias e Design de Multimédia em Viseu.</p>
    </div>
  </div>
);

export default Header;
