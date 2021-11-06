const express = require("express");
const router = express.Router();
const getAliens = require("../controllers/aliens/getAliens");
const getAlien = require("../controllers/aliens/getAlien");
const deleteAlien = require("../controllers/aliens/deleteAlien");
const createAlien = require("../controllers/aliens/createAlien");
const changeAlien = require("../controllers/aliens/changeAlien");

router.route("/").get(getAliens).post(createAlien);
router.route("/:id").get(getAlien).delete(deleteAlien).patch(changeAlien);

module.exports = router;
