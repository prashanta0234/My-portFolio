import React, { useRef } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";

import emailjs from "emailjs-com";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6jx37qe",
        "template_e2vlrmh",
        form.current,
        "user_kOifPw4vGKBXLR6Skivyt"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Send SuccessFully!");
          form.current = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Box sx={{ minHeight: "100vh", mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6}>
            <Typography variant="h4">Feel free to contact with me</Typography>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6">
                <LocalPhoneIcon /> 01754540234{" "}
              </Typography>
              <Typography variant="h6">
                <EmailIcon /> prashanta0234@gmail.com
              </Typography>
              <Typography variant="h6">
                <HomeWorkIcon /> Chandpur, Bangladesh
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "white",
                p: 5,
                borderRadius: 2,
                textAlign: "center",
              }}
              component="form"
              onSubmit={sendEmail}
              ref={form}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, py: 2, color: "#007DFF" }}
              >
                {" "}
                Concat Us
              </Typography>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                name="name"
                fullWidth
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                name="user_email"
                type="email"
                fullWidth
                sx={{ m: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Write message"
                variant="outlined"
                name="message"
                type="text"
                fullWidth
                multiline
                rows={4}
                sx={{ m: 1 }}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "#29c9f8", width: "100%", m: 1 }}
                type="submit"
              >
                {" "}
                SEND
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
