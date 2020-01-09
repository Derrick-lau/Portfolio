import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      <div className='About'>
        <About></About>
      </div>
      <div className='works'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
