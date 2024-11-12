const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const validateUser = require("../middleware/validation");
const router = express.Router();

router.post("/create/user", validateUser, createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/update/:id", validateUser, updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
