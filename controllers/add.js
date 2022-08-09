const { Hero } = require("../models/superheroes");
const fs = require('fs/promises');
const path = require('path');

const imagesDir = path.join(__dirname, '../', 'public', 'image');

const addHero = async (req, res, next) => {
  const { body } = req;

  try {
    const newHero = {
      nickname: body.nickname,
      real_name: body.real_name,
      origin_description: body.origin_description,
      superpower: body.superpower,
      catch_phrase: body.catch_phrase,
    };

    if (req.file) {
      const { path: tempUpload, originalname } = req.file
      const resultUpload = path.join(imagesDir, originalname)
      fs.rename(tempUpload, resultUpload)
      
      newHero.image = path.join('image', originalname)
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