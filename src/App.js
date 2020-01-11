import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section className="App-header">
      <Header></Header>
      </section>
      <section className='About'>
        <About></About>
      </section>
      <section className='works'>
        <Work></Work>
      </section>
      <section className='contact'>
        <Contact></Contact>
      </section>
    </main>
  );
}

export default App;
