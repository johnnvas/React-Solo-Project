'use strict';
module.exports = (sequelize, DataTypes) => {
  const Saved = sequelize.define('Saved', {
    userId: {
        type: Sequelize.INTEGER
      },
      imageId: {
        type: Sequelize.INTEGER
      },
      locationId: {
        type: Sequelize.STRING
      },
  }, {});
  Saved.associate = function(models) {
    // associations can be defined here
  };
  return Saved;
};
