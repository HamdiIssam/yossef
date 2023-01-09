const {
  createProduitController,
  getProduitController,
  getProduitByIdController,
  } = require("../controllers/produit");
  
const produitRouter = require("express").Router();
produitRouter.route("/").post(createProduitController);
produitRouter.route("/").get(getProduitController);
produitRouter.route("/:id").get(getProduitByIdController);

module.exports = produitRouter;
