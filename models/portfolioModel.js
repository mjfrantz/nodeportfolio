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
    summary: {
        type: String,
        required: [true, 'A portfolio must have a summary.']
    },
    links: {
        type: [String],
        required: [true, 'A portfolio must have github link']
    },
    image: {
        type: String,
        required: [true, 'A webpage must have a Landing Page Image.']
    },
    createdAt: {
        type: Date
    }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;