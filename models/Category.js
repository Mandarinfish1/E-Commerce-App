// Importing the Model and DataTypes classes from Sequelize
const { Model, DataTypes } = require("sequelize");

// Importing the Sequelize instance created in the connection.js file
const sequelize = require("../config/connection.js");

// Extending the Model class
class Category extends Model {}

// Initialize the model by defining the table schema
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    
    sequelize,
    timestamps: false,
    // Set the table name to "category"
    freezeTableName: true,
    // Use snake_case for column names
    underscored: true,
    // Set the model name to "category"
    modelName: "category",
  }
);

// Export the model for use in other parts of the application
module.exports = Category;
