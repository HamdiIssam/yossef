const express =require('express');
const db = require('./models');
var path = require('path');



const clientRouter = require('./routers/client'); 

const commandeRouter = require("./routers/commande");

const factureRouter = require("./routers/facture");

const lignecmdRouter = require("./routers/lignecmd");

const livreurRouter = require("./routers/livreur");

const produitRouter = require("./routers/produit");



const cors =require('cors');
const app = express();

app.use(express.urlencoded({ extended :true }));
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.use('/api/client',clientRouter);
app.use("/api/commande", commandeRouter);
app.use("/api/facture", factureRouter);
app.use("/api/lignecmd", lignecmdRouter);
app.use("/api/livreur", livreurRouter);
app.use("/api/produit", produitRouter);

// server
db.sequelize.sync().then(()=>{
    app.listen(4000,()=>{console.log("connected");})
})