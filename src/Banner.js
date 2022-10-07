import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./Db";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const bsurl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [banner, setbanner] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const getd = await axios.get(requests.netflix_originals);

      setbanner(
        getd.data.results[
          Math.floor(Math.random() * getd.data.results.length - 1)
        ]
      );
      return getd;
    }
    fetchdata();
  }, []);

  console.log(banner);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bsurl}${banner.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div style={{}} className="banner_content">
        <p className="banner_title" style={{ color: "white" }}>
          {banner.title || banner.name || banner.original_name}
        </p>
      

        <div className="banner_button">
          <button type="button" className="banner_button1">Play</button>
          <button type ="button" className="banner_button2">My List</button>
        </div>


        <p className="banner_description"> {banner.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
