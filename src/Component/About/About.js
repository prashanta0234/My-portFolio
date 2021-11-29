import { Button, Grid, Typography } from "@mui/material";
import React from "react";

// import Progress from "../Progress/Progress";
import Html from "../Progress/Html";
import Css from "../Progress/Css";
import Javascript from "../Progress/Javascript";
import Reactp from "../Progress/Reactp";
import Firebase from "../Progress/Firebase";
import { Box } from "@mui/system";

import resume from "../../resume/React_dev_Prashanta_Resume.pdf";

import "./About.css";

// icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import frelancer from "../../image/freelancer.png";
import fiveer from "../../image/fiveer.png";

const About = () => {
  return (
    <div className="about">
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        About Me
      </Typography>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ color: "#2ED8FE" }}>
              Prashanta Chakraborty
            </Typography>
            <Typography sx={{ mt: 2 }}>
              I am a front-end React developer. I know Html, CSS. Javascript,
              Node.js, MongoDB, express.js, firebase, MUI, bootstrap and so many
            </Typography>
            <a href={resume} download="React_dev_Prashanta_Resume.pdf">
              <Button
                sx={{
                  backgroundColor: "#29c9f8",
                  color: "white",
                  mt: 5,
                  py: 2,
                  px: 4,
                  cursor: "pointer",
                }}
              >
                DOWNLOAD CV
              </Button>
            </a>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6">
              <a
                target="_blank"
                href="https://www.facebook.com/prashanta.chakraborty.14/"
                title="facebook"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/prashanta-chakraborty-b653491aa/"
                title="linkedin"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                href="https://github.com/prashanta0234"
                title="github"
              >
                <GitHubIcon />
              </a>
              <a
                target="_blank"
                href="https://www.freelancer.com.bd/u/Prashanta0234"
                title="Freelancer"
              >
                <img src={frelancer} width="24px" height="24px" alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.fiverr.com/prashanta53?up_rollout=true"
                title="Fiveer"
              >
                <img src={fiveer} width="24px" height="24px" alt="" />
              </a>
            </Typography>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Typography>
                  <strong>Education </strong> <br /> B.sc in CSE in
                </Typography>{" "}
                <br />
                <Typography>
                  Bangladesh University of Business and Technology
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <Typography>
                    <LocalPhoneIcon /> 01754540234{" "}
                  </Typography>
                  <Typography>
                    <EmailIcon /> prashanta0234@gmail.com
                  </Typography>
                  <Typography>
                    <HomeWorkIcon /> Chandpur, Bangladesh
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={2}
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Html />
                <Typography variant="h6">Html</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Css />
                <Typography variant="h6">Css</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Javascript />
                <Typography variant="h6">Javascript</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Reactp />
                <Typography variant="h6">React</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Firebase />
                <Typography variant="h6">Firebase</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
