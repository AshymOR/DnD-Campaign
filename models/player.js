module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Sequelize", {
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        atk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        spriteURL: {
            type: DataTypes.VARCHAR,
            defaultValue: "#"
        }
    });

    Player.associate = function (models) {
        Player.belongsTo(models.Player, {
            foreignKey: {
                allowNull: false
            }
        })
        Player.hasOne(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Player;
};