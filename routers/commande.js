const {
  createCommandeController,
  getCommandeController,
  getCommandeByIdController,
} = require("../controllers/commande");
const commandeRouter = require("express").Router();

commandeRouter.route("/").post(createCommandeController);
commandeRouter.route("/").get(getCommandeController);
commandeRouter.route("/:id").get(getCommandeByIdController);

module.exports = commandeRouter;
