import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
// import "swiper/css/pagination";
// import "./styles.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import "./Project.css";
SwiperCore.use([Autoplay, Pagination]);
const ProjectDetails = () => {
  const { id } = useParams();
  const [DetailsProject, setDetailsProject] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setDetailsProject(data));
  }, []);

  useEffect(() => {
    const findProject = DetailsProject.find((project) => project.id === id);
    console.log(findProject);
    setDetails(findProject);
  }, [DetailsProject, id]);

  console.log(details);

  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <h1>{details?.name}</h1>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={details?.img} width="100%" alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={details?.img1} width="100%" alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={details?.img2} width="100%" alt="" />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Technology: {details?.des} </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectDetails;
