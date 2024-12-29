
import React, { useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Todo from './component/Todo';
import axios from 'axios';

function App() {
  const links=[{label:"Home",url:"/"},
    {label:"Register",url:"./Register"},
    {label:"Login",url:"./Login"},
    {label:"ToDo",url:"./Todo"}
  ];

  return (
    <Router>
       <div className="App">
  
  <Navbar links={links} />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/Todo'  element={<Todo/>}/>
  </Routes>
  </div>
</Router>

);
}
    
    

export default App;




