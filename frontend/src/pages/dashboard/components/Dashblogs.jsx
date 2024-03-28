import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import DashModal from "../../../components/compfordashboard/dashmodal";
import Formforblogs from "../../../components/compfordashboard/formforblogs";
import {
  apiGetAllBlogs,
  apiAddBlog,
  apiDeleteBlog,
} from "../../../services/blogs.services.js";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Dashblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiGetAllBlogs();
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  const handleAddNewBlog = () => {
    setModalOpen(true);
  };

  const handleEditBlog = (blog) => {
setModalOpen(true);  
}

  const handleDeleteBlog = async (blogId) => {
    try {
      await apiDeleteBlog(blogId);
      setBlogs(blogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleAddBlog = async (formData) => {
    try {
      const newBlog = await apiAddBlog(formData);
      setBlogs([...blogs, newBlog]);
      setModalOpen(false);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <DashboardLayout
      title={"Blogs"}
      buttonTitle={"Add New Blog"}
      handleAddButton={ handleAddNewBlog }
      >
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Card elevation={3} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${process.env.REACT_APP_URL}/${blog.image}`}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blog.article}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blog.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => handleEditBlog(blog)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => handleDeleteBlog(blog._id)}
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
          <Formforblogs onSubmit={handleAddBlog} />
        </DashModal>
      )}
    </DashboardLayout>
  );
};

export default Dashblogs;
