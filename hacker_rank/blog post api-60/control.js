const Posts = require("../models/posts");
module.exports = {
  create: async (req, res) => {
    try {
      const { isPublished, title, author, timestamp } = req.body;
      const publishedDate = isPublished ? new Date(new Date.now()) : null;
      const data = await Posts.create({
        isPublished,
        title,
        author,
        timestamp,
        publishedDate,
      });
      res.status(201).send(data);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getAll: async (req, res) => {
    const { author, isPublished } = req.query;
    try {
      const whereClause = {};
      if (author) {
        whereClause.author = author;
      }
      if (isPublished !== undefined) {
        whereClause.isPublished = isPublished;
      }

      const posts = await Posts.findAll({
        where: whereClause,
      });
      res.status(200).send(posts);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getOne: async (req, res) => {
    const id = req.params.id;

    try {
      const posts = await Posts.findOne({
        where: { id },
      });
      if (posts) res.status(200).send(posts);
      else res.status(404).send("Post not found");
    } catch (error) {
      res.status(404).send(error);
    }
  },

  methodNotAllowed: (req, res) => {
    res.status(405).send("Method Not Allowed");
  },
};
