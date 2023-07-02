import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Background from './components/Background/Background';

import { AnimatePresence } from 'framer-motion';
import Contacts from './components/Contacts/Contacts';
import Loader from './components/Loader';

function App() {
  const defaultTimer = 2300;
  const randomNum = Math.floor(Math.random() * 5) * 500 + defaultTimer;
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    const delayedFunction = () => {
      setIsLoading(false)
    };
    const timer = setTimeout(delayedFunction, defaultTimer);
    return () => clearTimeout(timer);
  }, [randomNum]); 

  return (
    <BrowserRouter>
      {isLoading?(<Loader/>):<AppContent />}
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/test" element={<Background />} />
        </Routes>
      </AnimatePresence>
      <Nav location={location.pathname}/>
      <Background/>
      <Contacts/>
    </div>
  );
}

export default App;
