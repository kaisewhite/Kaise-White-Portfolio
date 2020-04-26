import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <CssBaseline />

      <AppBar
        /** Menu Bar */
        style={{
          backgroundColor: "#141821",
          //backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      >
        <Toolbar>
          <Typography style={{ marginRight: "auto" }} variant="h4">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              K / W
            </Link>
          </Typography>
          {/** <img src={Logo} style={{ width: "5%", margin: "1%" }}></img> */}
          <Button color="inherit">
            <Link
              to="/services"
              style={{ color: "white", textDecoration: "none" }}
            >
              Services
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/projects"
              style={{ color: "white", textDecoration: "none" }}
            >
              Projects
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              about
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
