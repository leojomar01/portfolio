
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';
import About from './components/About/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/nav' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
