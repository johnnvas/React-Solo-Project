'use strict';
module.exports = (sequelize, DataTypes) => {
  const Saved = sequelize.define('Saved', {
    userId: {
        type: DataTypes.INTEGER
      },
      imageId: {
        type: DataTypes.INTEGER
      },
      locationId: {
        type: DataTypes.STRING
      },
  }, {});
  Saved.associate = function(models) {
    // associations can be defined here
  };
  return Saved;
};
