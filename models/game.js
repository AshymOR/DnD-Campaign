module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Sequelize", {
      
    });

    Game.associate = function(models) {
        Game.belongsTo(models.Player, {
            foreignKey: {
                allowNull: false
            }
        })
        Game.hasOne(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Game;
  };