const { Hero } = require("../models/superheroes");

const getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;
    const superheros = await Hero.find({}, '', {
      skip,
      limit: +limit,
    });

    const totalDocuments = await Hero.countDocuments({});

    res.json({
      status: "success",
      code: 200,
      data: {
        result: superheros,
        heroCount: totalDocuments,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;