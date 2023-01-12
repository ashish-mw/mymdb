"use strict";

const users = [
  {
    id: "584f459d-5fdc-4955-b0ed-63b8a59dca1a",
    username: "neo_anderson",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "82bbfc0f-4ff1-4488-bed3-624e53e1053d",
    username: "trinity",
    password: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const movies = [
  {
    id: "c93cc1e8-4a0e-4bcc-8b5a-5a9bfe173c7f",
    name: "Matrix",
    genre: "sci-fi",
    language: "English",
    yearOfRelease: 1998,
    createdByUser: "584f459d-5fdc-4955-b0ed-63b8a59dca1a",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "02e57aeb-fc94-4e74-aba6-8f92f4bd3f07",
    name: "Matrix Reloaded",
    genre: "sci-fi",
    language: "English",
    yearOfRelease: 1998,
    createdByUser: "584f459d-5fdc-4955-b0ed-63b8a59dca1a",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

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
    await queryInterface.bulkInsert("users", users);
    await queryInterface.bulkInsert("movies", movies);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("movies", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
