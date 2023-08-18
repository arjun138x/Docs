const router = require("express").Router();
const {
  methodNotAllowed,
  create,
  getAll,
  getById,
} = require("../controllers/reminders");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.patch("/:id", methodNotAllowed);
router.put("/:id", methodNotAllowed);
router.delete("/:id", methodNotAllowed);
module.exports = router;
