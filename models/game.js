module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        code: DataTypes.STRING,
        locations: DataTypes.STRING,
        currentLocI:  {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    Game.associate = function(models) {
        Game.hasOne(models.Player, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Game;
  };