import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Formforexperience = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    experience: "",
    role: ""
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      experience: "",
      role: ""
      
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={4}>
        <TextField
          label="Name of Experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          required
        />
        
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#800080" }}
        >
          Add Experience
        </Button>
      </Stack>
    </form>
  );
};

export default Formforexperience;
