
import './App.css';
// React Slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// If getting error to import slick carausel, remove ~

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<Moviepage />} />
        <Route path='/plays' element={<Plays/>} />
      </Routes>
  );
}

export default App;
