const Alien = require("../../models/aliens");

const changeAlien = async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    if (req.body.sub) {
      alien.sub = req.body.sub;
    }
    if (req.body.name) {
      alien.name = req.body.name;
    }
    if (req.body.tech) {
      alien.tech = req.body.tech;
    }

    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("error");
  }
};

module.exports = changeAlien;
