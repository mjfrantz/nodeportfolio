const express = require("express");
const portfolioController = require("./../controllers/portfolioController");

const router = express.Router();

router
  .route("/")
  .get(portfolioController.getAllPortfolios)
  .post(portfolioController.createPortfolio);
router
  .route("/:id")
  .get(portfolioController.getPortfolio)
  .patch(portfolioController.updatePortfolio)
  .delete(portfolioController.deletePortfolio);

module.exports = router;
