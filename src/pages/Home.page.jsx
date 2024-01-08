import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import axios from "axios";

//Components
// we can call imports by any name but name of called component i.e (EntertainmentCard.Component and its function name EntertainmemntCard) should be same;
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../components/HeroCarousal/HeroCarousal.Component";

const HomePage = () => {
  // Using Array cz we want to store multiple movies.
  const [movieRecommendation, setmovieRecommendation] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=12bf525dc11bc114f905f4226c7073ff"
      );
      setmovieRecommendation(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);
  return (
    <>
      <HeroCarousel />

      <div className="container mx:auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx:auto px-4 md:px-12 my-8">
        <PosterSlider
          title="recommended movies"
          subtitle="List of recommended movies"
          posters={movieRecommendation}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="RuPay" className="w-full h-full" />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand New Releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online stream events"
          subtitle="List of Online stream events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
