'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
        type: DataTypes.INTEGER
      },
      imageId: {
        type: DataTypes.INTEGER
      },
      comment: {
        type: DataTypes.TEXT
      }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Image, {foreignKey: 'imageId'})
  };
  return Comment;
};
