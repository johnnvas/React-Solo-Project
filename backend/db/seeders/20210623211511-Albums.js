'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Albums', [
        {
          userId: 1,
          title: "Thailand",
        },
        {
          userId: 1,
          title: "Autralia",
        },
        {
          userId: 1,
          title: "Italy",
        },
        {
          userId: 1,
          title: "Hawaii",
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
