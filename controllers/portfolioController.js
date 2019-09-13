const Portfolio = require('./../models/portfolioModel');

exports.getAllPortfolios = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

exports.getPortfolio = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};
exports.updatePortfolio = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

exports.deletePortfolio = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: ' This route is not yet defined'
    });
};

exports.createPortfolio = async (req, res) => {
    try {
        const newPortfolio = await Portfolio.create(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                portfolio: newPortfolio
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};