
const {
    createClientService,
    getAllClientService,
    getClientrByIdService,
    updateClientrByIDService,
    deleteClientrService,
  } = require("../Service/client");
  const { StatusCodes } = require("http-status-codes");
  const bcrypt = require("bcrypt");
   
  // create Client
  const createClientController = async (req, res) => {
let password =req.body.password
 password = await bcrypt.hash(password,10)
    const client= await createClientService({ ...req.body });

    res.status(StatusCodes.CREATED).send({msg:"create"});
  };
  
  // getAll Client
  const getAllClientController = async (req, res) => {
    const client = await getAllClientService();
    res.status(StatusCodes.CREATED).send(client);
  };
  
  // getById Client
  const getClientByIdController = async (req, res) => {
    const id = req.params.id;
    const client = await getClientrByIdService(id);
    res.status(StatusCodes.CREATED).send(client);
  };
  // update Client
  const updateClientByIdController = async (req, res) => {
    const id = req.params.id;
    const client = await updateClientrByIDService(req.body,id);
    // console.log("hhhhh",req.params,req.body);
    res.status(StatusCodes.CREATED).send({msg:"update client"});
  };
  
  // delete Client
  const deleteClientByIdController = async (req, res) => {
    const id = req.params.id;
    const client = await deleteClientrService(id);
    res.status(StatusCodes.CREATED).send({msg:"delete"});
  };
  
  module.exports = {
    createClientController,
    getAllClientController,
    getClientByIdController,
    updateClientByIdController,
    deleteClientByIdController,
  };

  