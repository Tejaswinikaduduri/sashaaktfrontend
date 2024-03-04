import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Readalongstories from './Components/Readalongstories';
import Youtubepage from './Components/Youtubepage';
import Videoquiz from './Components/Videoquiz';
import YouTubeVideo from './Components/YouTubeVideo';
import GameHome from './Components/gamehome';
import Labour from './Components/labour';
import About from './Components/About';
import Contact from './Components/contact';
import Question from './Components/question'; 
import FlipCard from './Components/FlipCard'; 
import Rights from './Components/Rights';
import Participation from './Components/participation';
import Cards from './Components/Cards';
import Rose from './Components/Rose';
import Catch from './Components/Catch';
import Read2 from './Components/Read2';
import Quiz2 from './Components/Quiz2';
import Pikachu from './Components/Pikachu';
import Jumpingfrog from './Components/JumpingFrog';
import DIY from './Components/DIY';
import CandyEatGame from './Components/CandyEatGame';
import CandyAbout from './Components/CandyAbout';
import CandyGame from './Components/CandyGame';
import CandyHome from './Components/CandyHome';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Display the Login component by default */}
        <Route path="/home" element={<Home />} />
        <Route path="/stories" element={<Readalongstories />} />
        <Route path="/see" element={<Youtubepage />} />
        <Route path="/vidquiz" element={<Videoquiz />} />
        <Route path="/yt/:vid" element={<YouTubeVideo />} />
        <Route path="/gamehome" element={<GameHome />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/question" element={<Question />} />
        <Route path="/flip" element={<FlipCard />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="/rose" element={<Rose />} />
        <Route path="/play" element={<Cards />} />
        <Route path="/participation" element={<Participation />} />
        <Route path="/catch" element={<Catch />} />
        <Route path="/read2" element={<Read2 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/pikachu" element={<Pikachu />} />
        <Route path="/frog" element={<Jumpingfrog />} />
        <Route path="/pin" element={<DIY />} />
        <Route path="/candyeatgame" element={<CandyEatGame />} />
        <Route path="/candyabout" element={<CandyAbout />} />
        <Route path="/candygame" element={<CandyGame />} />
        <Route path="/candyhome" element={<CandyHome />} />
      </Routes>
    </div>
  );
}

export default App;
