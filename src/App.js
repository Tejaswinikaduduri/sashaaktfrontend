//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Readalongstories from './Components/readalongstories';
import Youtubepage from './Components/Youtubepage';
import Videoquiz from './Components/Videoquiz';
import YouTubeVideo from './Components/YouTubeVideo';
import GameHome from './Components/gamehome';
import  Participation from './Components/participation';
import  Labour from './Components/labour';
import  About from './Components/About';
import Contact from './Components/contact';
function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/stories" element={<Readalongstories/>} />
      <Route path="/see" element={<Youtubepage/>} />
      <Route path="/vidquiz" element={<Videoquiz/>} />
      <Route path="/yt/:vid" element={<YouTubeVideo/>} />
      <Route path='/play' element={<GameHome/>}/>
      <Route path='/part'  element={<Participation/>} />
      <Route path='/lab' element={<Labour/>} />
      <Route path='/click' element={<About/>} />
      <Route path='/go' element={<Contact/>} />
      
    </Routes>
    </div>
  );
}



export default App;