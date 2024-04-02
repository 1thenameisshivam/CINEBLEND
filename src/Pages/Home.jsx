import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <SideNav />
      <div className="w-[80%] p-6 h-screen">
        <TopNav />
      </div>
    </div>
  );
};

export default Home;
