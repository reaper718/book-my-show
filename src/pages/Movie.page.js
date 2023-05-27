import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

const Movie = () => {
    return (
        <>
        <MovieHero />
        <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
            <div className="flex flex-col t=items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
                <p>Moving the action out of the woods and into the city, "Evil Dead Rise" tells a twisted tale of two estranged sisters, played by Sutherland and Sullivan, whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.</p>
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

export default Movie;