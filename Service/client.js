const db = require("../models");

//create Cleint
const createClientService = (data) => {
  return db.client.create(data);
};
// getAll Client
const getAllClientService = () => {
  return db.client.findAll();
};

// get Client ById
const getClientrByIdService = (id) => {
  return db.client.findByPk(id);
};

// Update Client
const updateClientrByIDService = (data,id) => {

  // console.log("bbbbbb", id, data);
  return db.client.update(data,{ where: { id:id } });
};


// delete Client 
const deleteClientrService = (id) => {
  return db.client.destroy({ where: { id: id } });
};

module.exports = {
  createClientService,
  getAllClientService,
  getClientrByIdService,
  updateClientrByIDService,
  deleteClientrService,
};
