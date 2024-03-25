// import React from 'react'

import SearchBar from "../SearchBar/SearchBar"
import style from "./nav.module.css"

const Nav = () => {
  return (
    <div className={style.container}>
      <SearchBar />
    </div>
  )
}

export default Nav