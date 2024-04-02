import { Link } from "react-router-dom";
import { useState } from "react";
const TopNav = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full text-zinc-300 relative h-[10vh] flex justify-start ml-[15%] items-center gap-4">
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
          className="text-3xl ri-close-fill"
          onClick={() => {
            setQuery("");
          }}
        ></i>
      )}

      <div className="w-[50%] bg-zinc-200 max-h-[50vh] absolute rounded top-24 overflow-auto">
        {/*
          <Link className="inline-block text-zinc-600 hover:text-black hover:bg-zinc-400 duration-300 w-full flex justify-start items-center border-b-2 border-zinc-100  p-10">
            <img src="" alt="" />
            <span>Movie Name</span>
          </Link>
        */}
      </div>
    </div>
  );
};

export default TopNav;
