module.exports = function(sequelize, DataTypes) {
    // Add underscore to Location because Location is keyword or something
    var Location_ = sequelize.define("Location_", {
        BackgroundURL: {
            type: DataTypes.STRING
        }
    });

    Location_.associate = function(models) {
        Location_.hasOne(models.Enemy, {
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Location_;
  };