const db = require("../models");



// create produit

const createProduitService = (data) => {
  return db.produit.create(data);
};

// getAll produit
const getAllProduitService = () => {
  return db.produit.findAll();
};
// get produit ById
const getProduitByIdService = () => {
  return db.produit.findByPk(id);
};
module.exports = {
    createProduitService,
    getAllProduitService,
    getProduitByIdService,
};





