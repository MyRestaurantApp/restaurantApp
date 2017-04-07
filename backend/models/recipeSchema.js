var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    menu: {
        type: String,
        lowercase: true,
        enum: ["green", "greener", "unicorn", "delivery"],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    ingredients: [String]

});

var Recipe = mongose.model("Recipe", recipeSchema);
module.exports = Recipe
