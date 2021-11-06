const Alien = require("../../models/aliens");

const deleteAlien = async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    const a1 = await alien.remove();
    res.json(a1);
  } catch (err) {
    res.send("error");
  }
};

module.exports = deleteAlien;
