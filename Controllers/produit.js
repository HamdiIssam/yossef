
const {
    createProduitService,
    getAllProduitService,
    getProduitByIdService,
  } = require("../Service/produit"); 
const { StatusCodes } = require("http-status-codes");
// const produit = require("../models/produitModel");

//  create Produit
const createProduitController = async (req, res) => {
    const da = await createProduitService({ ...req.body });
    res.status(StatusCodes.CREATED).send({msg:"create"});
  };
  
  // getAll Produit
  const getProduitController = async (req, res) => {
    const db = await getAllProduitService();
    res.status(StatusCodes.CREATED).send(db);
  };
  
  // getById Produit
  const getProduitByIdController = async (req, res) => {
    const id = req.params.id;
    const dc = await getProduitByIdService(id);
    res.status(StatusCodes.CREATED).send(dc);
  };
  
  module.exports = {
    createProduitController,
    getProduitController,
    getProduitByIdController,
  };
