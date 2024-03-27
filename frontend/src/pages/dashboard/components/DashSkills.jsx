import React, { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { apiGetAllSkills, apiAddSkill , apiDeleteSkill} from "../../../services/skills.services.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import DashModal from "../../../components/compfordashboard/dashmodal.jsx";
import Formforskills from "../../../components/compfordashboard/formforskills.jsx";

const DashSkills = () => {
  const [skills, setSkills] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const skills = await apiGetAllSkills();
      console.log(skills.data);
      setSkills(skills.data);
    } catch (error) {
      console.error("Error fetching skills", error);
    }
  };
  fetchData();

  const handleAddNewSkill = () => {
    setModalOpen(true);
  };
  
  const handleEditSkill = async (skill) => {
    setModalOpen(true);

  }

  const handleDeleteSkill = async (skillId) => {
    try {
      await apiDeleteSkill(skillId);
      setSkills(skills.filter((skill) => skill._id !== skillId));
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleAddSkill = async (formData) => {
    try {
      const newSkill = await apiAddSkill(formData);
      setSkills([...skills, newSkill]);
      setModalOpen(false);

    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };


  
  return (
    <>
      <DashboardLayout>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
            mt={5}
          >
            <Typography variant="h4">Skills</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddNewSkill}
              style={{ backgroundColor: "#800080" }}
            >
              Add New Skill
            </Button>
          </Stack>
          <Paper
            elevation={3}
            style={{ padding: "10px", marginBottom: "10px" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              fontWeight="bold"
              paddingLeft={3}
            >
              <Typography>Name of Skill</Typography>
              <Typography>Proficiency</Typography>
              <Typography>Actions</Typography>
            </Stack>
          </Paper>
          {skills.map((skill) => (
            <Paper
              key={skill.skill}
              elevation={3}
              style={{ padding: "10px", marginBottom: "10px" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                paddingLeft={3}
              >
                <Typography>{skill.skill}</Typography>
                <Typography>{skill.proficiency}</Typography>

                <Stack direction="row" spacing={1}>
                  <IconButton color="primary" aria-label="edit" onClick={() => handleEditSkill(skill)} >
                    
                    <EditIcon  />
                  </IconButton>
                  <IconButton color="error" aria-label="delete" onClick={() => handleDeleteSkill(skill._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Container>
      </DashboardLayout>
      {modalOpen && (
        <DashModal isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
           <Formforskills onSubmit={handleAddSkill} />
        </DashModal>
      )}
      
    </>
  );
};

export default DashSkills;
