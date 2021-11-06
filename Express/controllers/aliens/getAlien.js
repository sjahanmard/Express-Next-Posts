const Alien = require("../../models/aliens");

const getAlien = async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("error is " + err);
  }
};

module.exports = getAlien;
