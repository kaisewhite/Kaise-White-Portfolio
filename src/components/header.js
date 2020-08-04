import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ReactLogo from "../../static/stack/react-native.svg"

import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { red, blue, green } from "@material-ui/core/colors"
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel"
import Logo from "../../static/Logo.png"

//import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "../css/header.module.scss" //className={headerStyles.link}

const Header = () => {
  return (
    <header>
      <Toolbar className={headerStyles.header}>
        <Link to="/" className={headerStyles.logo}>
          <Typography
            style={{ color: "#e31b6d", fontSize: 30, marginLeft: 10 }}
          >
            K / W
          </Typography>
        </Link>

        <div className={headerStyles.headerRight}>
          <Link
            to="/projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
            Blog
          </Link>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
      </Toolbar>
    </header>
  )
}

export default Header

const styles = {
  button: {
    marginRight: 5,
    marginLeft: 5,
  },
}

{
  /**<Link to="/">
          <img
            src={Logo}
            style={{
              width: "5%",
            }}
          ></img>
        </Link>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button color="inherit">
            <Link
              to="/projects"
              style={{ color: "white", textDecoration: "none" }}
            >
              Projects
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </Button>
        </div> */
}
