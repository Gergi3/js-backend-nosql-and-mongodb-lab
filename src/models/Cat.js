const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    imageUrl: String,
});

catSchema.methods.getInfo = function() {
    return `${this.name} - ${description}`;
}

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;