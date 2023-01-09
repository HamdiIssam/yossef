module.exports = (sequelize, DataTypes) => {
    const produit = sequelize.define('produit', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          type: {
            type: DataTypes.STRING,
          },
      
    
    });
    return produit;
  };