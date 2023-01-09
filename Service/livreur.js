const db = require("../models");

// create livreur

const createLivreurService = (data) => {
  return db.livreur.create(data);
};

// getAll Livreur
const getAllLivreurervice = () => {
  return db.livreur.findAll();
};
// get Livreur ById
const getLivreurByIdService = () => {
  return db.livreur.findByPk(id);
};
module.exports = {
  createLivreurService,
  getAllLivreurervice,
  getLivreurByIdService,
};
