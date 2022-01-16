import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;