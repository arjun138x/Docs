const { Op } = require('sequelize');
const Analytics = require('../models/analytics');
const { subtractSecondsFromCurrentTime } = require('../utils');
// Function subtractSecondsFromCurrentTime is a utility function which accepts the seconds to subtract from thee current time and
// returns the javascript date object
module.exports = {
  create: async (req, res) => {
    try {
      const dataArray = req.body;
      const analytics = await Analytics.findAll();
      const not_exist = [];
      for (const input of inputArray) {
        let is_exist = false;
        const { user, eventType } = input;
        for (const analytic of analytics) {
          if (analytic.user === user && analytic.eventType === eventType) {
            is_exist = true;
          }
          if (!is_exist) {
            not_exist.push({ user, eventType });
            await Analytics.create({ user, eventType, date });
          }
        }
      }
      res.status(201).send({"ingested":not_exist.length});
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const analytics = await Analytics.findAll();
      res.status(200).send(analytics);
    } catch (error) {
      res.status(404).send(error);
    }
  },


  methodNotAllowed: (req, res) => {
    res.status(405).send("Method Not Allowed");
  },
};
