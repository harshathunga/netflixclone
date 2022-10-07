import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function Nav() {


  
  return (
    <div className='nav'>
      <div className="nav_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
          alt="logo"
        />
      </div>
      <div className="nav_avatar">
        <img style={{color: "white"}}
          src="https://pbs.twimg.com/media/Eh6d9HRXYAEFZ9W?format=png&name=small"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Nav;
