module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        code: DataTypes.STRING
    });

    Game.associate = function(models) {
        Game.hasOne(models.Location_, {
            foreignKey: {
                allowNull: false
            }
        });
        Game.hasOne(models.Player, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Game;
  };