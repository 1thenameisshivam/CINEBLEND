import HeroSec from "../Components/HeroSec";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import axios from "../Utils/axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [walpaper, setWalpaper] = useState(null);

  useEffect(() => {
    walpaper == null && getWallpaper();
  }, []);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const result = (Math.random() * data.results.length).toFixed();
      setWalpaper(data.results[result]);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(walpaper);
  return walpaper ? (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <SideNav />
      <div className="w-[80%] p-6 h-screen">
        <TopNav />
        <HeroSec data={walpaper} />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
