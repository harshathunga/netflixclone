import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";


const bsurl = "https://image.tmdb.org/t/p/original";

function View({ title, fetchurl,isLargeRow }) {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    async function getd() {
      const mrst = await axios.get(fetchurl);
      // console.log(mrst.data.results);
      setdata(mrst.data.results);
    }



    getd();
  }, [fetchurl]);


  return (
    <div className="row">
        {/* { loading ? (<h2>loafing</h2>):} */}
     
        <h6 className="row_title">{title}</h6>
        <div className="row_posters">
            
          {
            // loading ? (<h2>loading</h2>):
          data.map((e) => (
              
            <div key={e.id}>
              <img
                className= {`row_poster ${isLargeRow && "row_posterLarge"}`}
                
                // src={`${bsurl}${e.poster_path}`}
                src={`${bsurl}${isLargeRow ? e.poster_path : e.backdrop_path}`}
                alt={e.title}
              />
            </div>
          ))}
        </div>
     
    </div>
  );
}

export default View;
