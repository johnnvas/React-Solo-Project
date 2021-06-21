'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      locationId: {
        type: Sequelize.STRING
      },
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};
