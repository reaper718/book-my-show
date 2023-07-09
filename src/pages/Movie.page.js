import React, { useEffect, useState } from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

const MoviePage = ({ match }) => {
  const movieId = match.params.id;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.tmdb.org/3/movie/${movieId}?api_key=cb1697579fbf85b7166fd42675c3aab8`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p>{movieData.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div>
          <h3 className="text-gray-800 font-bold text-2xl">Applicable Offers</h3>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
            <div className="w-8 h-8">
              <BiCameraMovie className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">10% Off on movie munchies!</h3>
              <p className="text-gray-600 text-sm">Tap to view details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
