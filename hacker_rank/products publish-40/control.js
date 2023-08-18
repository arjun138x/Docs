const Products = require("../models/products");

module.exports = {
  create: async (req, res) => {
    const { name, price, mrp, stock } = req.body;
    try {
      const product = await Products.create({
        name,
        price,
        mrp,
        stock,
        isPublished: false,
      });
      res.status(201).send(product);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const products = await Products.findAll();
      res.status(200).send(products);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  patch: async (req, res) => {
    const id = req.params.id;
    const { isPublished = true } = req.body;

    try {
      const product = await Products.findOne({
        where: { id },
      });
      let err = [];
      if (product) {
        if (product.mrp >= product.price) {
          err.push("MRP should not be less than equal to the Price");
        }
        if (product.stock <= 0) {
          err.push("Stock count is 0");
        }
        if (err.length > 0) {
          res.status(422).send([...err]);
        } else {
          // await product.update({ isPublished });
          res.status(204).send();
        }
      } else {
        res.status(404).send("Product not found");
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },

  methodNotAllowed: (req, res) => {
    res.status(405).send("Method Not Allowed");
  },
};
