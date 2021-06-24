'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Albums', [
        {
          userId: 1,
          title: "Thailand",
          createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04"
        },
        {
          userId: 1,
          title: "Autralia",
           createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04"
        },
        {
          userId: 1,
          title: "Italy",
          createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04"
        },
        {
          userId: 1,
          title: "Hawaii",
          createdAt: "2021-06-21 17:38:46.592231-04",
          updatedAt: "2021-06-21 17:38:46.592231-04"
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
