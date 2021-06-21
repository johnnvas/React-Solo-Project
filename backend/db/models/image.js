'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
  userId: {
        type: DataTypes.INTEGER
      },
      albumId: {
        type: DataTypes.INTEGER
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      caption: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING
      }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};
