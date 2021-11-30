import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import swal from "sweetalert";

import "./Contact.css";

import emailjs from "emailjs-com";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    emailjs
      .send(
        "service_6jx37qe",
        "template_e2vlrmh",
        e,
        "user_kOifPw4vGKBXLR6Skivyt"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Good job!", "Sending Successful!", "success");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <Box sx={{ minHeight: "100vh", mt: 5 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "normal", alignItems: "center" }}
        >
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
                border: "2px solid #29C9F8",

                p: 5,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#29C9F8", fontWeight: 700 }}
              >
                Contact Me{" "}
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Your Name" {...register("name")} />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <input
                  placeholder="Enter Your Project Name"
                  {...register("project", { required: true })}
                />
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Write your Project  Details"
                />
                <Button
                  type="submit"
                  sx={{
                    bgcolor: "#29C9F8",
                    color: "white",
                    width: "100%",
                    mt: 2,
                  }}
                >
                  {" "}
                  Send
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
