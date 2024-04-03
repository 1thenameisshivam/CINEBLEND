import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjcyYmEwMGNkMTBhMzYxNzA3MDU3OTVlMzExMjIzOSIsInN1YiI6IjY1OGRjMDU2ZmU2YzE4NmFiOWE2Y2YyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eyPznaHwvV_VcrCyh28kY78hMX8jVwdbTG8Ojt4SBPs",
  },
});

export default instance;
