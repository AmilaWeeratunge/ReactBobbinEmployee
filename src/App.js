import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import NameList from  './components/pages/NameList/Namelist';
import HeaderBar from  './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';


function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderBar/>
      <switch>
      <Route path ="/About">

      <About/>

    </Route>

      <Route path ="/Namelist">
        <NameList/>

        </Route>

    <Route path="/" >
      <Home/>
    </Route>
      </switch>
      
      

      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
