import axios from "axios";
import React ,{useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
//import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {

  const  [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  },[]);
  console.log({popularMovies});

  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-gray-800">
        The best of Live Events
    </h1>
    <EntertainmentCardSlider />
    </div>
    <div className="bg-navCol-200 py-16">
      
      <div className="container mx-auto px-4">
      <div className="flex">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
        alt="Rupay"
        className="w-full h-full"
        />
      </div>
      <PosterSlider images={popularMovies} title="Premier" subtitle="Brand new releases every Friday" isDark />
      </div>
    </div>
    </div>

    <div className="container mx-auto px-4">
      <PosterSlider 
      images={popularMovies}
      title="Online Streaming Events"
      isDark={false}
      />
    </div>
    <div className="container mx-auto px-4">
      <PosterSlider 
      images={popularMovies}
      title="OutDoor Events"
      isDark={false}
      />
    </div>
    </>
  );
};

export default HomePage;