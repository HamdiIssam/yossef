const {
  createLivreurController,
  getLivreurController,
  getLivreurByIdController,
} = require("../controllers/livreur");

const livreurRouter = require("express").Router();

livreurRouter.route("/").post(createLivreurController);
livreurRouter.route("/").get(getLivreurController);
livreurRouter.route("/:id").get(getLivreurByIdController);

module.exports = livreurRouter;
