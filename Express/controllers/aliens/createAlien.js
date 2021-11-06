const Alien = require("../../models/aliens");

const createAlien = async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("error is " + err);
  }
};

module.exports = createAlien;
