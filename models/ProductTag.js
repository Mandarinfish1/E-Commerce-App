// Importing the DataTypes class from Sequelize
const { Model, DataTypes } = require("sequelize")

// Importing the Sequelize instance created in the connection.js file
const sequelize = require("../config/connection")

// Defining the Product model by extending the Model class
class Product extends Model {}

// Initializing the Product model by defining the table schema
Product.init(
  {
    // Defining the id column as an auto-incrementing integer primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Defining the product_name column as a non-null string
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Defining the price column as a non-null decimal with a maximum of 10 digits and 2 decimal places
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Defining the stock column as a non-null integer with a default value of 10
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // Defining the category_id column as a foreign key to the Category model's id column
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    
    sequelize,
    // Disable the createdAt and updatedAt columns
    timestamps: false,
    // Set the table name to "product"
    freezeTableName: true,
    // Use snake_case for column names
    underscored: true,
    // Set the model name to "product"
    modelName: "product",
  }
)

// Exporting the Product model for use in other parts of the application
module.exports = Product
