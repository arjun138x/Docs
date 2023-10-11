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

    try {
      const product = await Products.findOne({
        where: { id },
      });

      if (!product) {
        return res.status(404).send("Product not found");
      }

      const { mrp, price, stock } = product;
      if (mrp < price && stock == 0) {
        return res
          .status(422)
          .send([
            "MRP should be less than equal to the Price",
            "Stock count is 0",
          ]);
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

            try {
              const product = await Products.findOne({
                where: { id },
              });

              if (!product) {
                return res.status(404).send("Product not found");
              }

              const { mrp, price, stock } = product;
              if (mrp < price && stock == 0) {
                return res
                  .status(422)
                  .send([
                    "MRP should not be less than equal to the Price",
                    "Stock count is 0",
                  ]);
              } else if (mrp < price) {
                return res
                  .status(422)
                  .send(["MRP should not be less than equal to the Price"]);
              } else if (stock == 0) {
                return res.status(422).send(["Stock count is 0"]);
              } else {
                await product.update({ isPublished: true }, { where: { id } });
                res.status(204).send();
              }
            } catch (error) {
              res.status(404).send(error);
            }
          },

          noMethod: (req, res) => {
            res.status(405).json("Method Not Allowed");
          },
        };
      } else if (mrp < price) {
        return res
          .status(422)
          .send(["MRP should be less than equal to the Price"]);
      } else if (stock == 0) {
        return res.status(422).send(["Stock count is 0"]);
      } else {
        await product.update({ isPublished: true }, { where: { id } });
        res.status(204).send();
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },

  noMethod: (req, res) => {
    res.status(405).json("Method Not Allowed");
  },
};
