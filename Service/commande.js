const db = require("../models");

//create Commande
const createCommandeService = (data) => {
  return db.commande.create(data);
};
// getAll Commande
const getCommandeService = () => {
  return db.commande.findAll();
};

// get Commande ById
const getCommanderByIdService = (id) => {
  return db.commande.findByPk(id);
};

module.exports = {
  createCommandeService,
  getCommandeService,
  getCommanderByIdService,
};
