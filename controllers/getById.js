const { Hero } = require("../models/superheroes");
const { NotFound } = require('http-errors');

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const superhero = await Hero.findById(id);
    if (!superhero) {
      throw new NotFound();
    }
    res.json(superhero);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      error.status = 404;
    }
    next(error);
  }
};

module.exports = getById;