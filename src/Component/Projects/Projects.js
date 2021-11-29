import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Project.css";

// icon
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Link } from "react-router-dom";

const Projects = ({ url }) => {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setprojects(data));
  }, []);

  // const [projects, setProjects] = useState([]);
  console.log(url);
  return (
    <div>
      <h1>My projects</h1>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6}>
            <Box className="pro-img">
              <img src={project.img} width="100%" height="300px" alt="" />
              <Box className="pro-hov" sx={{ mx: "auto" }}>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  {project.name}
                </Typography>
                <Typography>{project.des}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <a
                    target="_blank"
                    href={project?.clint}
                    title="Client-Side Code"
                  >
                    <CodeIcon />
                  </a>
                  <a
                    target="_blank"
                    href={project?.server}
                    title="Server-Side Code"
                  >
                    <CodeIcon />
                  </a>
                  <a target="_blank" href={project?.live} title="">
                    <PublicIcon />
                  </a>
                  <Link to={`/home/${project?.id}`}>
                    <Button variant="contained" sx={{ bgcolor: "#c51919" }}>
                      Details &nbsp;
                      <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
