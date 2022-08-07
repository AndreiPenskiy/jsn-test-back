const { NotFound } = require("http-errors");
const { Hero } = require("../models/superheroes");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Hero.findByIdAndRemove(id);
    if (!result) {
        throw new NotFound(`Hero with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        message: "hero deleted",
        data: {
            result
        }
    })
}

module.exports = removeById;