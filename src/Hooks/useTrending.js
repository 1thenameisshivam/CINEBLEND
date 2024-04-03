import { useEffect } from "react";
import axios from "../Utils/axios";
import { useDispatch } from "react-redux";
import { setTrending } from "../Utils/movieSlice";
export const useTrending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      dispatch(setTrending(data.results));
    } catch (err) {
      console.log(err);
    }
  };
};
