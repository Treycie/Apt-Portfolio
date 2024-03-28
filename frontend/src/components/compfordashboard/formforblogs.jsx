import React, { useState } from "react";
  import Stack from "@mui/material/Stack";
  import TextField from "@mui/material/TextField";
  import Button from "@mui/material/Button";
  
const Formforblogs = ({onSubmit}) => {
    const [formData, setFormData] = useState({
      title: "",
      article: "",
      image: "",
      date: "" 
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
        title: "",
      article: "",
      image: "",
      date: "" 
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={4}>
          <TextField
            label="Title of Blog"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="article"
            label="article"
            multiline
            rows={4}
            value={formData.article}
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
            label="Blog Image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="date"
            type="date"
            label="Date" 
            value={formData.date}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" style={{ backgroundColor: "#800080" }}>
            Add Blog
          </Button>
        </Stack>
      </form>
    );
  };
  
  

export default Formforblogs