'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/longtale-boats-on-railay-beach-in-krabi-thailand-royalty-free-image-664506114-1559068887.jpg?crop=1xw:1xh;center,top&resize=980:*",
        location: "Railay Beach, Thailand",
        userId: 1,
        caption: "Enjoying this BEAUTIFUL view!",
        albumId: 1,
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
{
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/areal-view-of-white-sandy-beaches-and-turquoise-blue-water-news-photo-601065572-1559065071.jpg?crop=1xw:1xh;center,top&resize=980:*",
        location: "Whitehaven Beach, Autralia",
        userId: 1,
        caption: "Can't wait to see these sand dunes!",
        albumId: 1,
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },

{
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scenic-view-of-sea-against-sky-royalty-free-image-1054123788-1559069188.jpg?crop=1xw:1xh;center,top&resize=980:*",
        location: "Monterosso Al Mare, Italy",
        userId: 1,
        caption: "Stare seduti al sole tutto il giorno mi sembra una buona idea! (Sitting under the sun all day seems like a good idea!)",
        albumId: 1,
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
{
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-beaches-tunnels-beach-458194999-1498595551.jpg?crop=1xw:1xh;center,top&resize=980:*",
        location: "Tunnels Beach, Hawaii",
        userId: 1,
        caption: "I loved snorkeling here!!!",
        albumId: 1,
        createdAt: "2021-06-21 17:38:46.592231-04",
        updatedAt: "2021-06-21 17:38:46.592231-04"
      },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});

  }
};
