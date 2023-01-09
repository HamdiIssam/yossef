const {
  createClientController,
  getAllClientController,
  getClientByIdController,
  updateClientByIdController,
  deleteClientByIdController,
} = require("../Controllers/client");

const clientRouter = require("express").Router();

clientRouter.route("/").post(createClientController);
clientRouter.route("/").get(getAllClientController);
clientRouter.route("/:id").get(getClientByIdController);
clientRouter.route("/:id").patch(updateClientByIdController);
clientRouter.route("/:id").delete(deleteClientByIdController);

module.exports = clientRouter;
