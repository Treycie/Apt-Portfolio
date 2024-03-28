import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Formforachievement = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        achievement: "",
          description: ""
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
          achievement: "",
          description: ""
          
        });
      };
    
  return (
    <form onSubmit={handleSubmit}>
    <Stack direction="column" spacing={4}>
      <TextField
        label="Name of Achievement"
        name="achievement"
        value={formData.achievement}
        onChange={handleInputChange}
        required
      />
      <TextField
        sx={{ mb: "2rem" }}
        fullWidth
        name="description"
        label="Achievement Description"
        multiline
        rows={4}
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      
      <Button type="submit" variant="contained" style={{ backgroundColor: "#800080" }}>
        Add Achievement
      </Button>
    </Stack>
  </form>  
  )
}

export default Formforachievement