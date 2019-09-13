const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A portfolio must have a title.'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'A portfolio must have a description.']
    },
    websiteUrl: {
        type: String,
        required: [true, 'A portfolio must have a websiteUrl.']
    },
    landingPageImage: {
        type: String,
        // required: [true, 'A webpage must have a Landing Page Image.']
    }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;