const express = require("express");
const {
  getPosts,
  addNote,
  editNote,
  deleteNote,
  updatePin,
  searchPost,
} = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getPosts);
router.post("/addNote", authMiddleware, addNote);
router.post("/editNote/:postId", authMiddleware, editNote);
router.delete("/deleteNote/:postId", authMiddleware, deleteNote);
router.put("/update-pin/:postId", authMiddleware, updatePin);
router.get("/searchNote", authMiddleware, searchPost);

module.exports = router;
