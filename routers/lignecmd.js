const {
  createLignecmdController,
  getLignecmdController,
  getLignecmdByIdController,
} = require("../controllers/lignecmd");
const lignecmdRouter = require("express").Router();

lignecmdRouter.route("/").post(createLignecmdController);
lignecmdRouter.route("/").get(getLignecmdController);
lignecmdRouter.route("/:id").get(getLignecmdByIdController);

module.exports = lignecmdRouter;
