
module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          nom: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          telephone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
          },
          password: {
            type: DataTypes.STRING,
          },
          type: {
            type: DataTypes.STRING,
          },
        });
    //     client.associate = function(models) {
    //       client.belongsTo(models.User);
      
    // };
    client.associate = function(models) {
      client.hasMany(models.commande,{ onDelete:"cascade"});
      // User.hasMany(models.Favoriate,{ onDelete:"cascade"});
    
      // User.hasMany(models.Product,
      //   );
      // associations can be defined here
    };
    // User.sync({ alter: true });
    return client;
  };

