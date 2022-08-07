const { Hero } = require("../models/superheroes");


const addHero = async (req, res, next) => {
  const { body } = req;
 // const nickname = body.nickname;

  try {
    const newHero = {
      nickname: body.nickname,
      real_name: body.real_name,
      origin_description: body.origin_description,
      superpower: body.superpower,
      catch_phrase: body.catch_phrase,
    };

    if (req.file) {
      newHero.image = req.file.path;
    }

    const createdHero = await Hero.create(newHero);
    
    res.json({
      code: 201,
      status: "created",
      data: {
        createdHero,
      },
    });
  } catch (error) {
    next(error);
  }
};


module.exports = addHero;