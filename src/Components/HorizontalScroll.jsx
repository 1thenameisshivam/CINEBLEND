/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.jpg";
export const HorizontalScroll = ({ movies }) => {
  console.log(movies);
  return (
    <div className="w-full h-[40vh] p-5 ">
      <div className="mb-5">
        <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
      </div>
      <div className="w-full flex h-[40vh] gap-4 overflow-x-scroll">
        {movies &&
          movies.map((data, index) => {
            return (
              <div key={index} className="min-w-[15%] max-w-[15%] h-[90%] ">
                <img
                  className=" rounded-md  shadow-lg"
                  src={
                    data.poster_path || data.profile_path || data.backdrop_path
                      ? `https://image.tmdb.org/t/p/original/${
                          data.poster_path ||
                          data.profile_path ||
                          data.backdrop_path
                        }`
                      : noimage
                  }
                  alt=""
                />
                <h1 className=" font-black text-zinc-300 mt-1 mb-5 text-center">
                  {(
                    data.name ||
                    data.originam_name ||
                    data.original_title ||
                    data.title
                  ).slice(0, 20)}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};
