import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { filterFavs, orderFavs } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderFavs(e.target.value));
    setAux(!aux)
  };

  const handleFilter = (e) => {
    dispatch(filterFavs(e.target.value));
    setAux(!aux)
  };

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
