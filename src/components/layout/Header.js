import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import SearchFilm from "../search/SearchFilm";
import logo from "../img/logo.png";
import sprite from "../img/sprites.svg";
// import Navbar from "../nav/Navbar";


function Header() {
  
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  return (
    <header>
      <div className='header'>
        <div className="logo"><img className='logo_img' src={logo} alt="logo" onClick={redirectHome} /></div>
        <div className="logo_text">
          <p>JS BOOK STORE / Hello, Username</p>
        </div>
        <div class="user">
          <svg><use href={sprite + "#bucket"} alt="bucket"/></svg>
          <input type="submit" value="Sign-Out" />
          <svg><use href={sprite + "#user"} alt="user_logo"/></svg>
          <span>Username</span>
        </div>
      </div>
    </header>
  );
}

export default Header;