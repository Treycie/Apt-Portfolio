import React, { useState, useEffect } from "react";
import DashboardLayout from '../../../layouts/DashboardLayout';
  import {
    apiGetAllExperiences,
    apiAddExperience,
    apiDeleteExperience,
  } from "../../../services/experience.services.js";
  import { Card, CardActionArea, CardActions, CardContent, Grid } from "@mui/material";
  import Typography from "@mui/material/Typography";
  import IconButton from "@mui/material/IconButton";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  import DashModal from "../../../components/compfordashboard/dashmodal.jsx";
  import Formforexperience from "../../../components/compfordashboard/formforexperience.jsx";
  

const Dashexperiences = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const [experiences, setExperiences] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await apiGetAllExperiences();
        console.log(response.data);
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences", error);
      }
    };
  
    const handleAddNewExperience = () => {
      setModalOpen(true);
    };
  
    const handleEditExperience = (experience) => {
  setModalOpen(true);  
  }
  
    const handleDeleteExperience = async (experienceId) => {
      try {
        await apiDeleteExperience(experienceId);
        setExperiences(experiences.filter((experience) => experience._id !== experienceId));
      } catch (error) {
        console.error("Error deleting experience:", error);
      }
    };
  
    const handleAddExperience = async (formData) => {
      try {
        const newExperience = await apiAddExperience(formData);
        setExperiences([...experiences, newExperience]);
        setModalOpen(false);
      } catch (error) {
        console.error("Error adding experience:", error);
      }
    };
  
    return (
      <>
       <DashboardLayout
        title={"Experiences"}
        handleAddButton={ handleAddNewExperience }
        buttonTitle={"Add New Experience"}
      >
  
            <Grid container spacing={3}>
              {experiences.map((experience) => (
                <Grid item key={experience._id} xs={12} sm={6} md={4}>
                  <Card elevation={3} style={{ marginBottom: "10px" }}>
                    <CardActionArea>
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {experience.experience}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {experience.role}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {experience.organization}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {experience.duration}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {experience.location}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <IconButton color="primary" aria-label="edit" onClick={() => handleEditExperience(experience)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" aria-label="delete" onClick={() => handleDeleteExperience(experience._id)}>
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
            <Formforexperience onSubmit={handleAddExperience} />
          </DashModal>
        )}
      </>
    );
  };
  
  
  


export default Dashexperiences