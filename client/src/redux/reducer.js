import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actions-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      const filteredFavs = state.myFavorites.filter((fav) => {
        fav.id !== Number(action.payload);
      });
      return {
        ...state,
        myFavorites: filteredFavs,
      };

    case FILTER_FAV:
       const filterGender = state.allCharacters.filter( char => char.gender === action.payload)
      return {
        ...state,
        myFavorites: filterGender
      };

      case ORDER_FAV:
        const orderFavs = state.allCharacters.sort((a, b) => {
          return action.payload === "A" ? a.id - b.id : b.id - a.id;
        });
       return {
         ...state,
         myFavorites: orderFavs
       };
    default:
      return { ...state };
  }
}

export default rootReducer;
