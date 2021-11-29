import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import "./Project.css";

const Projects = () => {
  const projects = [
    {
      name: "Gn Resturent",
      des: "React, MUI,Firebase",
      img: "https://i.ibb.co/0hmp7jM/resturent.png",
      live: "#",
    },
    {
      name: "Gn Bike",
      des: "React, MUI,Firebase,Node,MongoDB,",
      img: "https://i.ibb.co/HPhXDRz/gnBike.png",
      live: "https://gn-bike.web.app/home",
    },
    {
      name: "Portfolio",
      des: "React, MUI,Node,MongoDB,",
      img: "https://i.ibb.co/JHd128Y/Myfolio.png",
      live: "#",
    },
    {
      name: "Gn shiping",
      des: "React, MUI,Node,MongoDB,",
      img: "https://i.ibb.co/PFqBbMp/shiping.png",
      live: "https://gn-shiping.web.app/home",
    },
    {
      name: "Gn Hospital",
      des: "React, React-bootstrap",
      img: "https://i.ibb.co/VMPfqZ7/gn-Hospital.png",
      live: "https://doctor-portal-f6478.web.app/",
    },
    {
      name: "BUBT Chorme extension",
      des: "Html,Css",
      img: "https://i.ibb.co/qpc9yGK/Chorme.png",
      live: "https://github.com/prashanta0234/Bubt-ChormeExtantion.git",
    },
  ];

  // const [projects, setProjects] = useState([]);
  console.log(projects);
  return (
    <div>
      <h1>My projects</h1>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} md={6}>
            <Box className="pro-img">
              <img src={project.img} width="90%" height="300px" alt="" />
              <Box className="pro-hov" sx={{ mx: "auto" }}>
                <Typography variant="h5">{project.name}</Typography>
                <Typography>{project.des}</Typography>
                <a target="_blank" href={project.live} title="">
                  <Button variant="contained" sx={{ mt: 2 }}>
                    {" "}
                    Live Site{" "}
                  </Button>
                </a>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
