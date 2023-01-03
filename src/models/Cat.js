const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Movie title is required'] // with message
    },
    age: {
        type: Number,
        required: true // without message,
    },
    description: String,
    imageUrl: String,
});

catSchema.methods.getInfo = function() {
    return `${this.name} - ${description}`;
}

catSchema.virtual('isNewborn')
    .get(function() {
        return age <= 3;
    })

catSchema.path('name').validate(function() {
    return this.name.length > 2 && this.name.length < 25;
}, `Name should be between 2 and 25 chars!`);

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;