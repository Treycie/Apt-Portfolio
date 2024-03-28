import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Formforprojects = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    project: "",
    description: "",
    image: "",
    link: "" 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      project: "",
      description: "",
      image: "",
      link: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={4}>
        <TextField
          label="Name of Project"
          name="project"
          value={formData.project}
          onChange={handleInputChange}
          required
        />
        <TextField
          sx={{ mb: "2rem" }}
          fullWidth
          name="description"
          label="Project Description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <TextField
          sx={{ mb: "2rem" }}
          InputLabelProps={{
            shrink: true
          }}
          type="file"
          fullWidth
          name="image"
          label="Project Image"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <TextField
          sx={{ mb: "2rem" }}
          fullWidth
          name="link"
          label="Project Link" // Label for the link input field
          value={formData.link}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" style={{ backgroundColor: "#800080" }}>
          Add Project
        </Button>
      </Stack>
    </form>
  );
};

export default Formforprojects;
