import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actions-type";

const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

const filterFav = (gender) => {
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};

export { addFav, removeFav, filterFav, orderFav };
