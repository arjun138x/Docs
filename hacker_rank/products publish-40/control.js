const Products = require("../models/products");

module.exports = {
  create: async (req, res) => {
    const { body } = req;
    try {
      const all_products = await Products.findAll({});
      const product = await Products.create({
        ...body,
        id: all_products.length + 1,
        isPublished: false,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const products = await Products.findAll({});
      res.status(200).json(products);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  patch: async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
      const product = await Products.findOne({
        where: { id },
      });
      let err = [];

      if (!product) {
        return res.status(404).send("Product not found");
      }

      const { mrp, price } = product;
      if (mrp < price && stock == 0) {
        err.push("MRP should not be less than equal to the Price");
      } else if (mrp < price) {
        err.push("Stock count is 0");
      } else if (stock == 0) {
        res.status(422).send([...err]);
      } else {
        await product.update({ isPublished: true }, { where: { id } });
        res.status(204).send();
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },

  methodNotAllowed: (req, res) => {
    res.status(405).json("Method Not Allowed");
  },
};
