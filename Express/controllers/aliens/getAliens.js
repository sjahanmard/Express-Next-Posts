const Alien = require("../../models/aliens");

const getAliens = async (req, res) => {
  try {
    const aliens = await Alien.find();
    // const aliens = await Alien.find({ sub: true });

    // query = req.query
    //const aliens = await Alien.find(query)
    // Profile.find({age:{$gt:40,$lt:50}})
    res.status(200).json(aliens);
  } catch (err) {
    res.send("error is " + err);
  }
};

module.exports = getAliens;
