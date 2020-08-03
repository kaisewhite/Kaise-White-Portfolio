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
import { useWindowSize } from "../helpers/index"

import headerStyles from "../css/header.module.scss" //className={headerStyles.link}

const Header = () => {
  const size = useWindowSize()
  return (
    <header
      style={{
        backgroundColor: "#141821",
        height: size.height * 0.1,
        backgroundSize: "cover",
      }}
    >
      <Toolbar>
        <Link to="/">
          <img
            src={Logo}
            style={{
              width: "6%",
              margin: "2%",
              marginRight: "auto",
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
  /**<h1>Full Stack</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav> */
}
