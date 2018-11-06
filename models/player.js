module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 20]
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
        },
        spriteURL_battle: {
            type: DataTypes.STRING,
            defaultValue: "#"
        },
        charPortrait: {
            type: DataTypes.STRING,
            allowNull: false
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