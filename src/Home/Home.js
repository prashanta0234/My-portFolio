import React from "react";

import logo from "../image/Blue Arrow Internet Logo (3).png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";

// Icons
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Home.css";

// import pdf
import resume from "../resume/React_dev_Prashanta_Resume.pdf";

import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import ShowHome from "../Component/ShowHome/ShowHome";
import About from "../Component/About/About";
import Projects from "../Component/Projects/Projects";
import Contact from "../Component/Contact/Contact";
import ProjectDetails from "../Component/Projects/ProjectDetails";

const drawerWidth = 300;

const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <img src={logo} width="30%" alt="" />
      <List sx={{ mt: 5 }}>
        <ListItem
          button
          sx={{ height: "60px", justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/">
            <ListItemText>
              {" "}
              <HomeIcon sx={{ mr: 2 }} /> Home
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem
          button
          sx={{ height: "60px", justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/home/aboutme">
            <ListItemText>
              <PersonIcon sx={{ mr: 2 }} /> About Me
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem
          button
          sx={{ height: "60px", justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/home/projects">
            <ListItemText>
              <AccountTreeIcon sx={{ mr: 2 }} /> Projects
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem
          button
          sx={{ height: "60px", justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/home/contact">
            <ListItemText>
              <PhoneIcon sx={{ mr: 2 }} /> Contact
            </ListItemText>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "#262525",
            boxShadow: 0,
            textAlign: "right",
          }}
        >
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1,
                display: { sm: "none" },
              }}
            >
              <MenuOpenIcon
                sx={{ width: "40px", height: "40px", color: "#29C9F8" }}
              />
            </IconButton>
            <Container>
              <Box sx={{ color: "white", mt: 2 }} className="top-header">
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

                <a href={resume} download="React_dev_Prashanta_Resume.pdf">
                  <Button sx={{ mb: 2 }}>RESUME</Button>
                </a>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor: "black",
                color: "white",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor: "black",
                color: "white",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            bgcolor: "#262525",
            color: "white",
            minHeight: "100vh",
          }}
        >
          <Toolbar />
          <Switch>
            {/* <Route path="/home">
              <ShowHome />
            </Route> */}
            <Route path="/home/aboutme">
              <About />
            </Route>
            <Route path="/home/projects">
              <Projects />
            </Route>
            <Route path="/home/contact">
              <Contact />
            </Route>
            <Route path="/home/:id">
              <ProjectDetails />
            </Route>

            <Route exact path="/">
              <ShowHome />
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
