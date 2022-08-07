const { Hero } = require("../models/superheroes");


const updateById = async (req, res) => {
    const { id } = req.params;

    Hero.findById(id).
        then((hero) => {
            hero.nickname = req.body.nickname;
            hero.real_name = req.body.real_name;
            hero.origin_description = req.body.origin_description;
            hero.superpower = req.body.superpower;
            hero.catch_phrase = req.body.catch_phrase;
            hero.image = req.file.path;

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