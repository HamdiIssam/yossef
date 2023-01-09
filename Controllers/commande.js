const {
  createCommandeService,
  getCommandeService,
  getCommanderByIdService,
} = require("../Service/commande"); 
const { StatusCodes } = require("http-status-codes");

// create Commande
const createCommandeController = async (req, res) => {
  const da = await createCommandeService({ ...req.body });
  res.status(StatusCodes.CREATED).send({msg:"create"});
};

// getAll Commande
const getCommandeController = async (req, res) => {
  const db = await getCommandeService();
  res.status(StatusCodes.CREATED).send(db);
};

// getById Commande
const getCommandeByIdController = async (req, res) => {
  const id = req.params.id;
  const dc = await getCommanderByIdService(id);
  res.status(StatusCodes.CREATED).send(dc);
};

module.exports = {
  createCommandeController,
  getCommandeController,
  getCommandeByIdController,
};
