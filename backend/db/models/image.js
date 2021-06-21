'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
  userId: {
        type: Sequelize.INTEGER
      },
      albumId: {
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      caption: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};
