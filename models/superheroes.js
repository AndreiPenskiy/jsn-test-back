const { Schema, model } = require("mongoose");
const Joi = require("joi");

const heroSchema = Schema({
  nickname: {
    type: String,
    unique: true,
    required: [true, "Name for hero"],
  },
  real_name: {
    type: String,
    required: [true, "Real name for hero"],
  },
  origin_description: {
    type: String,
    required: [true, "Description for hero"],
  },
  superpower: {
    type: String,
    required: [true, "Hero superpower"],
  },
  catch_phrase: {
    type: String,
    required: [true, "Hero catch phrase"],
  },
  image: {
    type: String,
    required: true,
  }, 
},
    { versionKey: false, timestamps: true },
);

const Hero = model("heroes", heroSchema);

module.exports = {
    Hero
};