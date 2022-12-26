import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbars from './Components/Navbars';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
    <Navbars/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/users' element ={<Users/>} />
      <Route path='/user/:id' element ={<Profile/>} />
      <Route path='/*' element ={<Error/>} />
    </Routes>
  
    </div>
  );
}

export default App;
