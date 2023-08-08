import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/Navbar/Dropdown';
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import SkillSection from './components/Skill Section/SkillSection';
import ProjectList from './components/Project/ProjectList';
import Contact from './components/Contact/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <div className='bg-black m-0 p-0'>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <About />
      <SkillSection />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
