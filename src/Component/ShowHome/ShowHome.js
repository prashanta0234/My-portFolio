import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

// import icon
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// import my image
import img from "../../image/my.jpg";

import "./ShowHome.css";

const ShowHome = () => {
  return (
    <div className="home">
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={10} md={6}>
          <img src={img} width="80%" alt="" />
        </Grid>
        <Grid item xs={10} md={6}>
          <Box>
            <Typography variant="h2" sx={{ color: "#2ED8FE" }}>
              - I`M PRASHANTA CHAKRABORTY
            </Typography>
            <Typography sx={{ color: "white" }}>
              I am a Front-end, React developer. I focused on clean and
              user-friendly website.
            </Typography>
            <Link to="/home/aboutme">
              <Button
                sx={{ bgcolor: "#29C9F8", color: "white", my: 4, py: 2, px: 3 }}
              >
                About me More &nbsp; <DoubleArrowIcon sx={{ color: "black" }} />
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowHome;
