const axios = require("axios");

// exports.getCharById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { data } = await axios.get(`${URL}${id}?key=pi-carrizobrebeca`)
//     //si hay información
//     if(data) {
//       const { id, status, name, species, origin, image, gender } = data;
//       let character = { id, status, name, species, origin, image, gender };
//       //enviar la respuesta del personaje
//       return res.status(200).json(character);
    
//     }
//     //si no existe personaje con ese id
//     return res.status(404).json({ error: "Not found" });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }

// const URL = `https://rym2.up.railway.app/api/character/`;

exports.getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-carrizobrebeca`
    )
    .then((resp) => {
      let { id, status, name, species, origin, image, gender } = resp.data;

      const character = { id, status, name, species, origin, image, gender };
      return character.name
        ? res.json(character)
        : res.status(400).send("Not found");
    })
    .catch((reason)=>{
      return res.status(500).send(reason.message);
    })
};

// exports.getCharById = (res, id) => {
//   axios
//     .get(
//       `https://rym2.up.railway.app/api/character/${id}?key=pi-carrizobrebeca`
//     )

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
//       return character;
//     })
//     .then((resp) => {

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(resp));
//     })
//     .catch((reason) => {

//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(JSON.stringify(reason.message));
//     });
// };
