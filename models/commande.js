module.exports = (sequelize, DataTypes) => {
  const commande = sequelize.define("commande", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date_achat: {
      type: DataTypes.DATE,
    },
    date_livraison: {
      type: DataTypes.DATE,
    },
    validation: {
      type: DataTypes.BOOLEAN,
    },
    type_payement: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.STRING,
    },
  });
      //     commande.associate = function(models) {
    //       commande.belongsTo(models.client);
      
    // };

    commande.associate = function(models) {
      commande.belongsTo(models.client);}

    commande.associate = function(models) {
      commande.belongsTo(models.livreur);}
    
  return commande;
};
