import React, { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import {
  apiGetAllSkills,
  apiAddSkill,
  apiDeleteSkill,
  apiUpdateSkill,
} from "../../../services/skills.services.js";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import DashModal from "../../../components/compfordashboard/dashmodal.jsx";
import Formforskills from "../../../components/compfordashboard/formforskills.jsx";
import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";

const DashSkills = () => {
  const [skills, setSkills] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(undefined);

  const openAddSkillModal = () => {
    setModalOpen(true);
  };

  const openEditSkillModal = async (skill) => {
    setModalOpen(true);
    setSelectedSkill(skill);
  };

  const handleDeleteSkill = async (skillId) => {
    setIsLoading(true);
    try {
      await apiDeleteSkill(skillId);
      await fetchData();
    } catch (error) {
      console.error("Error deleting skill:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSkill = async (formData) => {
    setIsLoading(true);
    try {
      await apiAddSkill(formData);
      setModalOpen(false);
      await fetchData();
    } catch (error) {
      console.error("Error adding skill:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditSkill = async (formData) => {
    setIsLoading(true);
    try {
      await apiUpdateSkill(selectedSkill._id, formData);

      setModalOpen(false);
      await fetchData();
    } catch (error) {
      console.error("Error updating skill:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const skills = await apiGetAllSkills();
      setSkills(skills.data);
    } catch (error) {
      console.error("Error fetching skills", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DashboardLayout
        title={"Skills"}
        handleAddButton={openAddSkillModal}
        buttonTitle={"Add New Skill"}
      >
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            fontWeight="bold"
            padding={[1, 3]}
          >
            <Typography fontWeight={700} width={"40%"}>
              Name of Skill
            </Typography>
            <Typography fontWeight={700} width={"40%"}>
              Proficiency
            </Typography>
            <Typography fontWeight={700} width={"20%"} textAlign={"right"}>
              Actions
            </Typography>
          </Stack>
        </Paper>
        {isLoading ? (
          <div className="flex justify-center">
            <Triangle
              visible={true}
              height="200"
              width="200"
              color="#800080"
              ariaLabel="triangle-loading"
              wrapperStyle={{ width: 100 }}
              wrapperClass=""
            />
          </div>
        ) : (
          skills.map((skill, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{ padding: "10px", marginBottom: "15px" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                paddingLeft={3}
              >
                <Typography width={"40%"}>{skill.skill}</Typography>
                <Typography width={"52%"} color={"#800080"}>
                  {skill.proficiency}
                </Typography>

                <Stack direction="row" width={"8%"} textAlign={"right"}>
                  <IconButton
                    color="primary"
                    aria-label="edit"
                    onClick={() => openEditSkillModal(skill)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete"
                    onClick={() => handleDeleteSkill(skill._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Paper>
          ))
        )}
      </DashboardLayout>
      {modalOpen && (
        <DashModal
          isOpen={modalOpen}
          closeModal={() => {
            setModalOpen(false);
            setSelectedSkill(undefined);
          }}
        >
          <Formforskills
            onSubmit={selectedSkill ? handleEditSkill : handleAddSkill}
            selectedData={selectedSkill}
          />
        </DashModal>
      )}
    </>
  );
};

export default DashSkills;
