'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      locationId: {
        type: DataTypes.STRING
      },
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' })
    Album.hasMany(models.Image, {foreignKey: 'albumId'})
  };
  return Album;
};
