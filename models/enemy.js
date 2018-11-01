module.exports = function (sequelize, DataTypes) {
    var Enemy = sequelize.define("Sequelize", {
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

    Enemy.associate = function (models) {
        Enemy.belongsTo(models.Location_, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Enemy;
};