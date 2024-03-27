import { Router } from "express";  
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import multer from "multer"


const router = Router();
const EXPERIENCES_COLLECTION = db.collection("experiences");
const upload = multer({dest:"upload/images"});


// Endpoint for getting list of experience
router.get("/", async(req, res)=>{
    let results = await EXPERIENCES_COLLECTION.find({}).toArray() ; 
    res.send(results).status(200);
});
// Endpoint for adding a single experience by id
router.get("/:id", async (req, res) => {
    let query = { _id: new ObjectId(req.params.id)};
    let result = await EXPERIENCES_COLLECTION.findOne(query);

    if (!result) res.send("Not found!").status(404);
    else res.send(result).status(200);
});
// Endpoint for adding a single experience
router.post("/",upload.single("image"), async (req, res)=> {
    try {
        let newExperience = { 
            experience: req.body.experience,
            role: req.body.role,
            organisation: req.body.organisation,
            duration: req.body.duration,
            location:req.body.location
        }
        let result = await  EXPERIENCES_COLLECTION.insertOne(newExperience);
        res.send(result).status(201);
    } catch(error) {
        console.log (error);
    }
});
// Emdpoint for updating a experience by the Id
router.patch("/:id",upload.single("image"), async (req, res) => {
    try {
    const query = {_id: new ObjectId(req.params.id) };
    const updates={
        $set:{
            experience: req.body.experience,
            role: req.body.role,
            organisation: req.body.organisation,
            duration: req.body.duration,
            location:req.body.location
        }
    };
    let result = await EXPERIENCES_COLLECTION.updateOne(query, updates);
    res.send(result).status(200);
    } catch (error){
        console.error(error);
    }
   
});

// Endpoint for deleting a experience by id
router.delete ('/:id', async (req, res) => {
    try {
        const query ={_id: new ObjectId(req.params.id) };
        let result=await EXPERIENCES_COLLECTION.deleteOne(query);
        res.send(result).send(200);
    } catch(error) {
        console.error(error);
    }
});
export default router;