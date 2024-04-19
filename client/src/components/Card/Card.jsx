import { addFav, removeFav } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./card.module.css";

//conectar nuestro componente de react a nuestro fluy}jo de redux
import { connect } from "react-redux";

import { useEffect, useState } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({
        name,
        status,
        image

        });
    setIsFav(!isFav);
  };

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <div className={style.buttonContainer}>
        <button className={style.btn} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className={style.imgContainer}>
        <img src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name} | {id}</h2>
        </Link>
      </div>

      <div className={style.description}>
        <h2>
          <span>{status}</span>
        </h2>
        <h2>
          <span>{species}</span>
        </h2>
        <h2>
          <span>{gender}</span>
        </h2>
        <h2>
          <span>{origin}</span>
        </h2>
      </div>
    </div>
  );
}

//despachar acciones
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
