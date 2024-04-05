import style from "./card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {

  const navigate = useNavigate()

  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button className={style.btn} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className={style.imgContainer}>
        <img src={image} alt="" />
        <h2 className={style.name} onClick={() => navigate(`/detail/${id}`)}>{name}</h2>
      </div>

      <div className={style.description}>
        <h2><span>{status}</span></h2>
        <h2><span>{species}</span></h2>
        <h2><span>{gender}</span></h2>
        <h2><span>{origin}</span></h2>
      </div>

    </div>
  );
}
