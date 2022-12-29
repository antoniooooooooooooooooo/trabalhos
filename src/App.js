import React from 'react';

import { Hero,Footer,SobreMim} from './container';
import { Navbar } from './components';
import './App.css';
import Trabalhos from './container/Trabalhos/Trabalhos';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <SobreMim />
    <Trabalhos />
    <Footer />
  </div>
);

export default App;
