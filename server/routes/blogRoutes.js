const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

router.post("/addBlog", blogController.addBlog);
router.get("/Blog", blogController.getAllBlogs);
router.put("/updateBlogUnlike/:id", blogController.updateBlogUnlike);
router.put("/updateBloglike/:id", blogController.updateBlogLike);
router.delete("/Blog/:id", blogController.deleteBlog);
router.get("/Blog/:id", blogController.getBlogById);
router.put("/totalVisitor/:id", blogController.updateTotalVisitor);

module.exports = router;
