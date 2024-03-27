import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
//import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Nav from "./components/Nav/Nav.jsx";
//import characters from "./data.js";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

   //const onClose = () => window.alert("Emulamos que se cierra la card");
  
   const onClose = (id) => {

      let filterCharacters = characters.filter((ch) => {return ch.id !== id})
      //filtro de estado local en el que te quedes con personajes con id distinto al q recibes x parámetro
      setCharacters(filterCharacters);
  }

  function onSearch(id) {
    axios
      .get(`https://rym2.up.railway.app/api/character/${id}?key=pi-carrizobrebeca`)
      .then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert("¡No hay personajes con este ID!");
            }
         }
      );
  };

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
