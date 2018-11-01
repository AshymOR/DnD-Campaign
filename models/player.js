module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        atk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        spriteURL: {
            type: DataTypes.STRING,
            defaultValue: "#"
        }
    });

    Player.associate = function (models) {
        Player.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Player;
};