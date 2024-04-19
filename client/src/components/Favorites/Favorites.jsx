import React from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { filterFav, orderFav } from "../../redux/actions";


const Favorites = ({ myFavorites }) => {

  const dispatch = useDispatch();

  const optionsGender = ["Male", "Female", "Genderless", "unknown"];

  const handleOrder = (e) => {
    dispatch(orderFav(e.target.value))
  }

  const handleFilter = (e) => {
    dispatch(filterFav(e.target.value))
  }

  return (
    <div>

      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        {optionsGender.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>

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
