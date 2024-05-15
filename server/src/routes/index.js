
const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { deletFav } = require("../controllers/deletFav");

// const { postFav, deleteFav } = require("../controllers/handleFavorites");
// const { login } = require("../controllers/login");

const router = Router();

router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deletFav);
module.exports = router;