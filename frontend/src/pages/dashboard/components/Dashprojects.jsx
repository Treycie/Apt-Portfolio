import {React, useState} from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
  Typography,
} from "@mui/material";
import { apiGetAllProjects } from "../../../services/projects.services";
import DashboardLayout from "../../../layouts/DashboardLayout";

const Dashprojects = () => {
  const [projects, setProjects] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const projects = await apiGetAllProjects();
      console.log(projects.data);
      setProjects(projects.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };
  fetchData();

    return (
      <>
      <DashboardLayout>
      <Grid sx={{ mt: "1rem", justifyContent: "center" }} container spacing={3}>
        
          {projects.map((project) => (
            <Grid key={project._id} item xs={4}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardActionArea sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${process.env.REACT_APP_URL}/images/${project.image}`}
                    alt={project.title}
                  />
                  <CardContent sx={{ height: "100%" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        
      
      </Grid>
      </DashboardLayout>
      </>
    );
  }

export default Dashprojects;
