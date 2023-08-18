const Reminders = require("../models/reminders");
const { Op } = require("sequelize");

module.exports = {
  create: async (req, res) => {
    try {
      const { user, description, date } = req.body;
      const reminder = await Reminders.create({ user, description, date });
      res.status(201).send(reminder);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getAll: async (req, res) => {
    const { user, after } = req.query;
    try {
      const whereClause = {};
      if (user) {
        whereClause.user = parseInt(user);
      }
      if (after) {
        whereClause.date = {
          [Op.gte]: parseInt(after),
        };
      }

      const reminders = await Reminders.findAll({
        where: whereClause,
      });
      res.status(200).send(reminders);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const reminder = await Reminders.findOne({
        where: { id },
      });

      if (reminder) {
        res.status(200).send(reminder);
      } else {
        res.status(404).send("ID not found");
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },

  methodNotAllowed: (req, res) => {
    res.status(405).send("Method Not Allowed");
  },
};
