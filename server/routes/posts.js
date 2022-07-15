const express = require("express");
const router = express.Router();
const Post = require("../models/postSchema");

router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const arr = category.split("");
  const array = arr.slice();
  arr[0] = array[0].toUpperCase();
  const cat = arr.join("");
  try {
    const posts = await Post.find({ category: cat });
    console.log(posts);
    res.send(posts);
  } catch (error) {
    res.status(500).send("Something went wrong...", error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) res.status(404).send("No Product with the given Id");
    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.send(savedPost);
  } catch (error) {
    res.status(500).send("Something went wrong...", error.message);
  }
});

router.get("/", async (req, res) => {
  const promise1 = Post.find({ category: "Headphones" });
  const promise2 = Post.find({ category: "Speakers" });
  const promise3 = Post.find({ category: "Earphones" });
  try {
    Promise.all([promise1, promise2, promise3]).then((values) => {
      res.send([values[0][0], values[1][0], values[1][1], values[2][0]]);
    });
  } catch (error) {
    res.status(500).send("Something went wrong...", error.message);
  }
});

module.exports = router;
