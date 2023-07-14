import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, {useState} from "react";
import sprite from "../img/sprites.svg";

// Outlet allow set the constant Header and Footer for all pages
function Layout () {
  const [mode, setMode] = useState("light");
  
  function handleClick(){
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <>
      <Header />
      <main className={'day-night ' + mode}>
        <div className="mode">
          <h6>Dark / Light</h6>
          <button onClick={handleClick}>
            <svg className="svg"><use href={sprite + "#dark-light"} /></svg>
          </button>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};

export default Layout;