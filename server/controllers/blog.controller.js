const Blog = require("../models/Blog");

const addBlog = async (req, res) => {
  try {
    // Extracting data from the request body
    const {
      title,
      description,
      subtitle1,
      subDescription1,
      subtitle2,
      subDescription2,
      subtitle3,
      subDescription3,
      subtitle4,
      subDescription4,
      blogType,
      date,
      blogBy,
      photo
    } = req.body;

    // const image = req.files?.image?.data;
    // const encodedImg = image.toString('base64');
    // const imageBuffer = Buffer.from(encodedImg, 'base64');

    // Creating the blogInfo object
    const blogInfo = {
      title,
      description,
      subtitle1,
      subDescription1,
      subtitle2,
      subDescription2,
      subtitle3,
      subDescription3,
      subtitle4,
      subDescription4,
      blogType,
      date,
      blogBy,
      likes: [],
      totalVisitor: [],
      photo
    };

    const result = await Blog.create(blogInfo);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlogUnlike = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const updateQuery = { $pull: { likes: req.body?.likes } };
    const options = { upsert: true, new: true };
    const updatedBlog = await Blog.findOneAndUpdate(
      query,
      updateQuery,
      options
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlogLike = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const updateQuery = { $push: { likes: req.body?.likes } };
    const options = { upsert: true, new: true };
    const updatedBlog = await Blog.findOneAndUpdate(
      query,
      updateQuery,
      options
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Blog.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findOne({ _id: id });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTotalVisitor = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const updateQuery = { $push: { totalVisitor: req.body?.visit } };
    const options = { upsert: true, new: true };
    const updatedBlog = await Blog.findOneAndUpdate(
      query,
      updateQuery,
      options
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBlog,
  getAllBlogs,
  updateBlogUnlike,
  updateBlogLike,
  deleteBlog,
  getBlogById,
  updateTotalVisitor,
};
