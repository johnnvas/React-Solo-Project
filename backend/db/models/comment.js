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
  };
  return Comment;
};
