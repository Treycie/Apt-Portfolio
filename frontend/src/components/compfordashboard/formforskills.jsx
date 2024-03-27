import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const Formforskills = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    skill: "",
    proficiency: "Beginner" // Default proficiency level
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
    onSubmit(formData); // Pass form data to parent component
    // Reset form fields after submission
    setFormData({
      name: "",
      proficiency: "Beginner"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={4}>
        <TextField
          label="Name of Skill"
          name="skill"
          value={formData.skill}
          onChange={handleInputChange}
          required
        />
        <TextField
          select
          label="Proficiency"
          name="proficiency"
          value={formData.proficiency}
          onChange={handleInputChange}
          required
        >
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" style={{ backgroundColor: "#800080" }}>
          Add Skill
        </Button>
      </Stack>
    </form>
  );
};

export default Formforskills;
