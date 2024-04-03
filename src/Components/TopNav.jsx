import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../Utils/axios";
import noimage from "../assets/noimage.jpg";
const TopNav = () => {
  const [query, setQuery] = useState("");

  const [serches, setSerches] = useState(null);

  useEffect(() => {
    getSerches();
  }, [query]);

  const getSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSerches(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full text-zinc-300 relative h-[10vh] flex justify-center items-center gap-4">
      <i className="text-3xl  ri-search-2-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="p-5 w-[50%] bg-transparent  border-none outline-none text-xl"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          className="text-3xl ri-close-fill absolute right-72"
          onClick={() => {
            setQuery("");
          }}
        ></i>
      )}

      <div className="w-[45%] bg-zinc-200 max-h-[50vh] absolute rounded top-16 left-82 overflow-auto">
        {serches &&
          serches.map((data, index) => (
            <Link
              key={index}
              className="inline-block text-zinc-600 hover:text-black hover:bg-zinc-400 duration-300 w-full flex justify-start items-center border-b-2 border-zinc-100  p-5"
            >
              <img
                className="h-[10vh] w-[10vh] object-cover rounded-md mr-5 shadow-lg"
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
              <span>
                {data.name ||
                  data.originam_name ||
                  data.original_title ||
                  data.title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopNav;
