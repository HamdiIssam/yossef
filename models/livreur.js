
module.exports = (sequelize, DataTypes) => {
    const livreur = sequelize.define('livreur', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          nom: {
            type: DataTypes.STRING,
          },
          telephone: {
            type: DataTypes.INTEGER,
            unique:true,
          },
          password: {
            type: DataTypes.STRING,
          },
        });
 
    livreur.associate = function(models) {
      livreur.hasMany(models.commande,{ onDelete:"cascade"});

    };
 
    return livreur;
  };

