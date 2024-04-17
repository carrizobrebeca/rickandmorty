// import React from 'react'

import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { useNavigate, Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const navigate = new useNavigate();
  return (
    <div className={style.container}>
      <button onClick={() => navigate("/home")}>HOME</button>
      <button onClick={() => navigate("/about")}>ABOUT</button>
      
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
