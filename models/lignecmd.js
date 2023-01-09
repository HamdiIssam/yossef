module.exports = (sequelize, DataTypes) => {
    const lignecmd = sequelize.define("lignecmd", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          num_ticket: {
            type: DataTypes.INTEGER,
          },
          prix: {
            type: DataTypes.STRING,
          },
          quantite: {
            type: DataTypes.INTEGER,
          },
    });
  
    lignecmd.associate = function(models) {
        lignecmd.belongsTo(models.produit);
        lignecmd.belongsTo(models.commande);}
  
    // lignecmd.associate = function(models) {
    //     lignecmd.belongsTo(models.commande);}
  
    
      
    return lignecmd;
  };
  