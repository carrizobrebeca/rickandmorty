//importar http desde el modulo http
const http = require("http");

const PORT = 3001;
const {getCharById} = require("./controllers/getCharById")

//importar el archivo data.js
//no necesitamos mas el archivo data de utils usamos el getCharById
// const characters = require("./utils/data.js");

//importar el controlador
// const { getCharById } = require("./controllers/getCharById");

//a partir de http crea y levanta un servidor en el puerto 3001
http
  .createServer((req, res) => {
    //el servidor aceptara peticiones de cualquier client
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    //!elimina el condicional que creaste
    //Crea un condicional que verfique si la url incluye el string "/rickandmorty/character/:id "
    // if (url.includes("/rickandmorty/character")) {
      //si lo incluye deberas obtener el id del personaje que te llega por la url
      //eel id de la url es un string, y los id de los personajes son números
    //   const id = Number(url.split("/").pop());

      //luego de obtener el id, búscalo dentro del archivo data. js (deberas importar el archivo)
    //   const character = characters.find((char) => {
    //     return char.id === id;
    //   });

    //enviar como respuesta un JSON que contenga el personaje
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify(character))

    // }

    // //! Crea un condicional que pregunte si la url incluye el string "/rickandmorty/character".
    // //!En el caso de que si lo incluya deberás ejecutar el controlador que creamos en el ejercicio anterior pasándole como argumentos: res, id
    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").pop());
        try {
            getCharById(res, id);
        } catch (error) {
            
        }
      
    }
  })
  .listen(3001, "localhost"); //levantar el servidor