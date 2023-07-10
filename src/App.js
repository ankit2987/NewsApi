import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FetchData from './components/FetchData';
import Footers from './components/Footers';

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path ="/general" element={<FetchData cat = "general"/>}/>
    <Route path ='/business' element={<FetchData cat = "business"/>}/>
    <Route path ='/entertainment' element={<FetchData cat = "entertainment"/>}/>
    <Route path ='/health' element={<FetchData cat = "health"/>}/>
    <Route path ='/science' element={<FetchData cat = "sciences"/>}/>
    <Route path ='/sports' element={<FetchData cat = "sports"/>}/>
    <Route path ='/technology' element={<FetchData cat = "technology"/>}/>

    
    </Routes>
    </Router>
    <Footers/>
      
    </>
  );
};

export default App