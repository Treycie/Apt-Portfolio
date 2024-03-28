import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import {
  apiGetAllAchievements,
  apiAddAchievement,
  apiDeleteAchievement,
} from "../../../services/achievements.services.js";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DashModal from "../../../components/compfordashboard/dashmodal.jsx";
import Formforachievement from "../../../components/compfordashboard/formforachievement.jsx";

const Dashachievements = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiGetAllAchievements();
      console.log(response.data);
      setAchievements(response.data);
    } catch (error) {
      console.error("Error fetching Achievements", error);
    }
  };

  const handleAddNewAchievement = () => {
    setModalOpen(true);
  };

  const handleEditAchievement = (achievement) => {
    setModalOpen(true);
  };

  const handleDeleteAchievement = async (achievementId) => {
    try {
      await apiDeleteAchievement(achievementId);
      setAchievements(
        achievements.filter((achievement) => achievement._id !== achievementId)
      );
    } catch (error) {
      console.error("Error deleting Achievement:", error);
    }
  };

  const handleAddAchievement = async (formData) => {
    try {
      const newAchievement = await apiAddAchievement(formData);
      setAchievements([...achievements, newAchievement]);
      setModalOpen(false);
    } catch (error) {
      console.error("Error adding Achievement:", error);
    }
  };
  return (
    <DashboardLayout
      title={"Achievements"}
      buttonTitle={"Add New Achievement"}
      handleAddButton={handleAddNewAchievement}
    >
      <Grid container spacing={3}>
        {achievements.map((achievement) => (
          <Grid item key={achievement._id} xs={12} sm={6} md={4}>
            <Card elevation={3} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {achievement.achievement}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => handleEditAchievement(achievement)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => handleDeleteAchievement(achievement._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {modalOpen && (
        <DashModal
          isOpen={modalOpen}
          closeModal={() => {
            setModalOpen(false);
          }}
        >
          <Formforachievement onSubmit={handleAddAchievement} />
        </DashModal>
      )}
    </DashboardLayout>
  );
};

export default Dashachievements;
