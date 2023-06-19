
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Nav from './components/Nav/Nav';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/nav' element={<Nav/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
