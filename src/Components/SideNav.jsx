import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] p-6 border-r-zinc-200 border-r h-screen">
      <h1 className="text-2xl font-bold">
        <i className="ri-dv-fill  text-[#6556CD] "></i>
        <span className="pl-2 text-white ">CINEBLEND</span>
      </h1>
      <nav className="text-zinc-400 flex flex-col">
        <h1 className="mt-5 mb-5 text-xl font-semibold text-white ">
          New Feeds!
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="bg-zinc-300"></hr>
      <nav className="text-zinc-400 flex flex-col">
        <h1 className="mt-5 mb-5 text-xl font-semibold text-white">
          Website Imformation
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-information-fill"></i>About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded duration-300 p-5">
          <i className="pr-2 ri-phone-fill"></i>Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
