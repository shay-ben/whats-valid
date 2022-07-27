import React from "react";
// import { useQuery } from "@apollo/client";
// import Signup from "../../pages/Sign-up";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
// import "../../App.css";

const Header = () => {
  return (
    <header id="header">
      <div className="title">
        <h1>
          <Link to={"/"}>
            <span>Signin</span>
          </Link>
        </h1>
        <h3 className="textglow">Welcome! </h3>
      </div>

      <nav id="nav-bar">
        <ul id="navTabs">
          <li>
            <Link to={"/Newpoll"}>Create a Poll</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;