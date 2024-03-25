import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters from './data.js';
import { useState } from 'react';

function App() {
   
   const [characters, setCharacters] = useState([]);

   const onClose = () => window.alert("Emulamos que se cierra la card");

   const onSearch = () => {

      const example = {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      };
      
      setCharacters([example]);
   };

   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;

