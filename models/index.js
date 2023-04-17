// Import models
const Product = require("./Product")
const Category = require("./Category")
const Tag = require("./Tag")
const ProductTag = require("./ProductTag")

// Define associations between models
// Categories have many Products
Product.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });

// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id" });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

// Exporting models
module.exports = { Product, Category, Tag, ProductTag };
