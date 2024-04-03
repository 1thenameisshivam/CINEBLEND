import HeroSec from "../Components/HeroSec";
import { HorizontalScroll } from "../Components/HorizontalScroll";
import Loader from "../Components/Loader";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import { useTrending } from "../Hooks/useTrending";
import { useSelector } from "react-redux";
const Home = () => {
  useTrending();
  const data = useSelector((store) => store?.movies?.trending);

  const walpaper = data && data[Math.floor(Math.random() * 20)];

  return walpaper ? (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <SideNav />
      <div className="w-[80%] p-6 h-screen overflow-auto ">
        <TopNav />
        <HeroSec data={walpaper} />
        <HorizontalScroll movies={data} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
