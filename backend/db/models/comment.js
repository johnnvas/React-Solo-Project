'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
        type: Sequelize.INTEGER
      },
      imageId: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};
