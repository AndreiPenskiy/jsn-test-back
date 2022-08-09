const { Hero } = require("../models/superheroes");
const path = require("path");
const fs = require("fs/promises");

const imagesDir = path.join(__dirname, '../', 'public', 'image');

const updateById = async (req, res) => {
    const { id } = req.params;

    
    Hero.findById(id).
        then((hero) => {
            hero.nickname = req.nickname;
            hero.real_name = req.real_name;
            hero.origin_description = req.origin_description;
            hero.superpower = req.superpower;
            hero.catch_phrase = req.catch_phrase;

            if (req.file) {
      const { path: tempUpload, originalname } = req.file
      const resultUpload = path.join(imagesDir, originalname)
      fs.rename(tempUpload, resultUpload)
      
      hero.image = path.join('image', originalname)
    };

            hero
                .save()
                .then(() => res.json({
                    status: "success",
                    code: 200,
                    data: {
                        hero
                    }
                }))
                
                .catch((err) => res.status(400).json(`Error ${err}`));
        })
    .catch((err) => res.status(400).json(`Error ${err}`))
}

module.exports = updateById;