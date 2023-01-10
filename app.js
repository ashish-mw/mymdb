require("dotenv").config();

// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING); // Example for postgres

const db = require("./models");

async function main() {
  try {
    db.sequelize
      .sync()
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });

    // console.log("Works");
  } catch (error) {
    console.log(error);
  }
}

main();
