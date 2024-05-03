let myFavorites = [];

exports.postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

exports.deleteFav = (req, res) => {
    const {id} = req.params;
    const deletedChar = myFavorites.filter((char) => {
        return char.id !== id;
    })
    myFavorites= deletedChar;
    return res.json(myFavorites)
};
