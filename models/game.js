module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Sequelize", {
        started: DataTypes.BOOLEAN
    });

    Game.associate = function(models) {
        Game.belongsTo(models.Player, {
            foreignKey: {
                allowNull: false
            }
        })
        Game.hasOne(models.Location_, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Game;
  };