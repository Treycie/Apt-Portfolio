import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import multer from "multer"

const router = Router();
const ACHIEVEMENT_COLLECTION = db.collection("achievements");
const upload = multer({dest:"upload/images"});

//Endpoint for getting list of achievements
router.get("/", async (req, res) => {
  let results = await ACHIEVEMENT_COLLECTION.find({}).toArray();
  res.send(results).status(200);
});

//Endpoint for adding a single achievement by id
router.get("/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };
  let result = await ACHIEVEMENT_COLLECTION.findOne(query);

  !result ? result("Not Found!").status(404): 
  res.send(result).status(200);
});

//Endpoint for adding a single achievement
router.post("/",upload.single("image"), async (req, res) => {
  try {
    let newAchievement = {
      achievement: req.body.achievement,
      description: req.body.description,
    };
    let result = await ACHIEVEMENT_COLLECTION.insertOne(newAchievement);
    res.send(result).status(202);
  } catch (error) {
    console.log(error);
  }
});

//Endpoint for updating an achievement by id
router.patch("/:id",upload.single("image"), async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let updates = {
      $set: {
        achievement: req.body.achievement,
        description: req.body.description
      }
    };
    let result = await ACHIEVEMENT_COLLECTION.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
  }
});

//Endpoint for deleting an achievement by id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    let result = await ACHIEVEMENT_COLLECTION.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
  }
});
export default router;
