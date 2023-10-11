const router = require('express').Router();
const { create, methodNotAllowed, getAll } = require('../controllers/analytics');

router.post("/", create);
router.get("/", getAll);
router.patch("/:id", methodNotAllowed);
router.put("/:id", methodNotAllowed);
router.delete("/:id", methodNotAllowed);
module.exports = router;
