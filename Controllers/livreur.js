const {
    createLivreurService,
  getAllLivreurervice,
  getLivreurByIdService,
}= require("../Service/livreur")
const { StatusCodes } = require("http-status-codes");
// const livreur = require("../models/livreurModel");

// create Livreur 
const createLivreurController = async (req, res) => {
    const da = await createLivreurService({ ...req.body });
    res.status(StatusCodes.CREATED).send({msg:"create"});
  };
  
  // getAll Livreur
  const getLivreurController = async (req, res) => {
    const db = await getAllLivreurervice();
    res.status(StatusCodes.CREATED).send(db);
  };
  
  // getById Livreur
  const getLivreurByIdController = async (req, res) => {
    const id = req.params.id;
    const dc = await getLivreurByIdService(id);
    res.status(StatusCodes.CREATED).send(dc);
  };
  
  module.exports = {
    createLivreurController,
    getLivreurController,
    getLivreurByIdController,
  };