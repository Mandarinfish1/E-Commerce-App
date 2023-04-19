const router = require("express").Router();
const { Category, Product } = require("../../models");

// GET all categories with their associated Products
router.get("/", async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(categoriesData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category by ID with its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" })
      return
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a category by ID
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
    })
    if (!categoryData[0]) {
      res.status(404).json({ message: "No category found with this id!" })
      return
    }
    res.status(200).json({ message: "Category updated successfully!" })
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a category by ID
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    })
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" })
      return
    }
    res.status(200).json({ message: "Category deleted successfully!" })
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
