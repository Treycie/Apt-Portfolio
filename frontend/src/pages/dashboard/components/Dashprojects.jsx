import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import {
  apiGetAllProjects,
  apiAddProject,
  apiDeleteProject,
} from "../../../services/projects.services.js";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DashModal from "../../../components/compfordashboard/dashmodal.jsx";
import Formforprojects from "../../../components/compfordashboard/formforprojects.jsx";

const Dashprojects = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiGetAllProjects();
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const handleAddNewProject = () => {
    setModalOpen(true);
  };

  const handleEditProject = (project) => {
setModalOpen(true);  
}

  const handleDeleteProject = async (projectId) => {
    try {
      await apiDeleteProject(projectId);
      setProjects(projects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleAddProject = async (formData) => {
    try {
      const newProject = await apiAddProject(formData);
      setProjects([...projects, newProject]);
      setModalOpen(false);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };
  
  return (
   <>
    <DashboardLayout
      title={"Projects"}
      buttonTitle={"Add New Project"}
      handleAddButton={ handleAddNewProject }
      >
      <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item key={project._id} xs={12} sm={6} md={4}>
                <Card elevation={3} style={{ marginBottom: "10px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`${process.env.REACT_APP_URL}/${project.image}`}
                      alt={project.project}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.project}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {project.link}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton color="primary" aria-label="edit" onClick={() => handleEditProject(project)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" aria-label="delete" onClick={() => handleDeleteProject(project._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </DashboardLayout>
      {modalOpen && (
        <DashModal isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
          <Formforprojects onSubmit={handleAddProject} />
        </DashModal>
      )}
   </>
  );
      };
export default Dashprojects;