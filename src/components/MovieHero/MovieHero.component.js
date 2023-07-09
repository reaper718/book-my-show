import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

const MovieHero = () => {
  const match = useRouteMatch();
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

  const posterPath = `https://image.tmdb.org/t/p/original${movieData.poster_path}`;
  const backdropPath = `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;
  
  return (
    <>
      <div className="relative">
        <div className="md:hidden">
          <img src={posterPath} alt="poster" />
        </div>

        <div className="hidden md:block lg:hidden">
          <img src={posterPath} alt="poster" />
        </div>

        <div className="hidden lg:block" style={{ height: "30rem" }}>
          <div
            className="absolute h-full w-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />

          <div className="z-30">
            <div className="absolute z-30 w-64 h-96 left-64 top-10">
              <img
                src={posterPath}
                alt="poster"
                className="h-full w-full rounded-xl"
              />
            </div>

            <div className="absolute right-96 top-10">
              <p className="text-black font-bold text-4xl">{movieData.original_title}</p>
              <p className="text-black font-bold text-xl">{movieData.vote_average}/10</p>
              <p className="text-black font-bold text-xl">{movieData.vote_count}K votes</p>
              <p className="text-black font-bold text-xl">{movieData.original_language}</p>
              <p className="bg-white text-black font-bold text-xl">{movieData.release_date}/10</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Book Tickets</button>
            </div>
          </div>
          <img src={backdropPath} alt="poster" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
