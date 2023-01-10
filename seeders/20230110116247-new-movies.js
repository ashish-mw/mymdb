"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "movies",
      [
        {
          id: uuidv4(),
          name: "Matrix",
          genre: "sci-fi",
          language: "English",
          yearOfRelease: 1998,
          createdByUser: "3f16cb37-b615-4999-9c69-523b3e3de3dc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Matrix Reloaded",
          genre: "sci-fi",
          language: "English",
          yearOfRelease: 2001,
          createdByUser: "3f16cb37-b615-4999-9c69-523b3e3de3dc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Matrix Revelations",
          genre: "sci-fi,thriller,fantasy",
          language: "English",
          yearOfRelease: 2003,
          createdByUser: "3f16cb37-b615-4999-9c69-523b3e3de3dc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("movies", null, {});
  },
};
