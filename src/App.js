
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Skills from './components/Skills/Skills';
import Mouse from './components/Mouse';
import Loader from './components/Loader';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Mouse/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
