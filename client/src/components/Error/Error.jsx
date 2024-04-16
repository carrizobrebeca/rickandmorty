import style from "./error.module.css";
import { useNavigate } from "react-router-dom";

const Error = ({ onSearch }) =>{
    const navigate = new useNavigate();
    return(
        <div className={style.pageContainer}>
            <div className={style.contentContainer}>
                <h3>Error</h3>
                <div className={style.contenedor}>
                    <h1>44</h1>
                </div>
                <footer className={style.ft}>The page you are trying to search has been moved to another universe</footer>
                <button className={style.btn} onClick={() => navigate("/home")}>Get Me Home</button>
            </div>
        </div>
    ) 
}

export default Error 
