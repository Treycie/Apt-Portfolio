import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = Router();
const BLOGS_COLLECTION = db.collection("blogs");

//Endpoint for getting list of blogs
router.get("/", async (req, res) => {
  let results = await BLOGS_COLLECTION.find({}).toArray();
  res.send(results).status(200);
});

//Endpoint for adding a new post by id
router.get("/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };
  let result = await BLOGS_COLLECTION.findOne(query);

  !result ? res.send("Not Found!").status(404) : res.send(result).status(200);
});

//End for adding a single post
router.post("/", async (req, res) => {
  try {
    let newBlog = {
      title: req.body.title,
      article: req.body.article,
      image: req.body.image,
    };
    let result = await BLOGS_COLLECTION.insertOne(newBlog);
    res.send(result).status(201);
  } catch (error) {
    console.log(error);
  }
});

//Endpoint for updating new post by id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        title: req.body.title,
        article: req.body.article,
        image: req.body.image,
      },
    };
    let result = await BLOGS_COLLECTION.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
  }
});

//Endpoint for deleting a skill by id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let result = await BLOGS_COLLECTION.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
  }
});
export default router;
