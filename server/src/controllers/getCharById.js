const axios = require("axios");

const URL = `https://rym2.up.railway.app/api/character/`;

// exports.getCharById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {data} = await axios.get(`${URL}${id}?key=pi-carrizobrebeca`);
//     if (data) {
//       const {id, status, name, species, origin, imagen, gender } = data;
//       let character = {id, status, name, species, origin, imagen, gender };
//       return res.status(200).json(character);
//     }
//     return res.status(404).json({error: "Not Faund"});
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };

//por defecto si no especificamos la peticion se hace un get
exports.getCharById = (res, id) => {
  axios
    .get(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-carrizobrebeca`
    )

    .then((resp) => {
      //!axios devuelve la info en un .data
      // let character = resp.data;
      // return {
      //     name: character.name,
      //     gender: character.gender,
      //     species: characters.species,
      //     origin: character.origin,
      //     image: character.image,
      //     status: character.status,
      // }

      let { name, gender, species, origin, image, status } = resp.data;

      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      return character;
    })
    .then((resp) => {
      //caso de éxito
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(resp)); //resp = el {character} que nos envia la resolucion de la promesa anterior

      //caso de error, lo maneja un catch
    })
    .catch((reason) => {
      //razon del error
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(JSON.stringify(reason.message));
    });
};

// otra forma
// exports.getCharByID = (res, id) => {
//   axios
//     .get(`https://rym2.up. railway. app/api/character/${id}?key-Sabri-Rapa`)
//     .then((resp) => {
//       let { name, gender, species, origin, image, status } = resp.data;

//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));

//     })
//     .catch((reason) => {
//       //razon del error
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: reason.message }));
//     });
// };
