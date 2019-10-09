const Portfolio = require("./../models/portfolioModel");

exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();

    res.status(200).json({
      status: "success",
      results: portfolios.length,
      data: {
        portfolios
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err
    });
  }
};

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        portfolio
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "SuperFail",
      message: err
    });
  }
};

exports.createPortfolio = async (req, res) => {
  try {
    const newPortfolio = await Portfolio.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        portfolio: newPortfolio
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidator: true
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        portfolio
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.deletePortfolio = async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);

  try {
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
