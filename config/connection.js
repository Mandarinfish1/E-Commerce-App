// Importing the dotenv library and loading the variables from a .env file
require("dotenv").config();

// Importing the Sequelize library
const Sequelize = require("sequelize");

// Creating a new Sequelize instance using either the JAWSDB_URL (if it exists),
// or the local database specified in the other variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    })

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize
