import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import Typewriter from "typewriter-effect";

// import icon
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// import my image
import img from "../../image/my.jpg";

import "./ShowHome.css";

const ShowHome = () => {
  AOS.init();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="home">
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={10} md={6}>
          <div
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <img src={img} width="80%" alt="" />
          </div>
        </Grid>

        <Grid item xs={10} md={6}>
          <Box>
            {isMobile ? (
              <Typography
                sx={{
                  color: "#2ED8FE",
                  fontSize: "2em",
                  fontFamily: "M PLUS 1 Code",
                }}
              >
                - I`M{" "}
                <Typewriter
                  options={{
                    strings: [" PRASHANTA", "a React dev!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            ) : (
              <Typography
                variant="h2"
                sx={{
                  color: "#2ED8FE",
                  fontFamilly: "M PLUS 1 Code",

                  fontWeight: 500,
                }}
              >
                - I`M
                <Typewriter
                  options={{
                    strings: [" PRASHANTA", "a React dev !"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            )}

            <Typography sx={{ color: "white", mt: 2, fontFamily: "cursive" }}>
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
