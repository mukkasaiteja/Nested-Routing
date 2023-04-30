import Nav from './components/Nav';
import Home from './components/Home'
import './App.css';
import React from 'react';
import Tech from './components/Tech';
import { Navigate, Route, Routes } from 'react-router-dom';
import Html from './components/Html'
import Css from './components/Css'
import Js from './components/Js'
import Contact from './components/Contact'
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Tech' element={<Tech/>}>
        <Route path='html' element={<Html/>}/>
        <Route path='' element={<Navigate to='html'/>}/>
        <Route path='css' element={<Css/>}/>
        <Route path='js' element={<Js/>}/>
      </Route>
      <Route  path='/Contact' element={<Contact/>}/>
      <Route  path='/products' element={<Products/>}/>
      

    
    </Routes>
    </div>
  );
}

export default App;
