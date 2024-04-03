/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const HeroSec = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)) , url(https://image.tmdb.org/t/p/original/${
          data.poster_path || data.profile_path || data.backdrop_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" w-full h-[50vh] flex flex-col justify-end p-[5%] items-start"
    >
      <h1 className="text-3xl font-black text-white mb-5 w-[70%]">
        {data.name || data.originam_name || data.original_title || data.title}
      </h1>

      <p className="w-[70%] text-white mb-3">
        {data.overview.slice(0, 200)}
        <Link className="text-blue-600">...more</Link>
      </p>
      <p className="text-white">
        <i className="ri-megaphone-fill text-yellow-400 text-xl mr-1"></i>
        {data.release_date || "No Information"}
        <i className="ri-movie-2-fill  text-yellow-400 text-xl ml-2 mr-1"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className=" bg-blue-600 p-3 mt-3 rounded-lg">Watch Trailer</Link>
    </div>
  );
};

export default HeroSec;
