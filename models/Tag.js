const { Model, DataTypes } = require("sequelize");

// Importing the connection instance from config/connection.js
const sequelize = require("../config/connection.js");

// Defining the Tag model that extends the Model class provided by Sequelize
class Tag extends Model {}


Tag.init(
  {
    // Defining the 'id' column as an INTEGER type, with primaryKey set to true and autoIncrement enabled
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Defining the 'tag_name' column as a STRING type
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Passing the sequelize instance to the model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

// Exporting the Tag model
module.exports = Tag;
