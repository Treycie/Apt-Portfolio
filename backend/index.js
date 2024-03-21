import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import skills from "./routes/skills.routes.js";
import blogs from "./routes/blogs.routes.js";
import projects from "./routes/projects.routes.js";
import achievements from "./routes/achievements.routes.js";
import experiences from "./routes/experiences.routes.js";


const PORT = process.env.PORT || 5000;

const  app = express();

//add middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//load routes
app.use("/skills", skills);
app.use("/blogs", blogs);
app.use("/projects", projects);
app.use("/achievements", achievements);
app.use("/experiences", experiences);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
