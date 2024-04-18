import React from "react";
import { connect } from "react-redux";

import Cards from "../Cards/Cards";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <Cards characters={myFavorites} />;
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
