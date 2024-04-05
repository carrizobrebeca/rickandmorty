import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacters] = useState();
  useEffect(() => {
    axios
      .get(
        `https://rym2.up.railway.app/api/character/${id}?key=pi-carrizobrebeca`
      )
      .then(({ data }) => {
        if (data.name) {
          setCharacters(() => data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
      );
  }, [id])

  return !character ? <div>Cargando...</div> : (
    <div className={style.pageCenter}>
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={character.image} alt="" />
        <h2 className={style.name}>{character.name}</h2>
      </div>

      <div className={style.description}>
        <h2>
          Status: <span>{character.status}</span>
        </h2>
        <h2>
          Specie: <span>{character.species}</span>
        </h2>
        <h2>
          Gender: <span>{character.gender}</span>
        </h2>
        <h2>
          Origin: <span>{character.origin.name}</span>
        </h2>
      </div>
    </div>
    </div>  
  );
};

export default Detail;
