import "./App.css";
// React Slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// If getting error to import slick carausel, remove ~

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
