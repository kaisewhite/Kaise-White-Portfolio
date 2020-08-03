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
import Logo from "../../static/Logo.svg"

//import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useWindowSize } from "../helpers/index"

const Footer = () => {
  const size = useWindowSize()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer
      style={{
        backgroundColor: "#141821",
        height: size.height * 0.1,
        backgroundSize: "cover",
      }}
    >
      <Toolbar>
        <img
          src={Logo}
          style={{ width: "5%", margin: "1%", marginRight: "auto" }}
        ></img>
        <Typography style={{ fontSize: 10, color: "#FFF" }}>
          ©2020 Designed and developed by Kaise White
        </Typography>
      </Toolbar>
    </footer>
  )
}

export default Footer

/** Menu Bar */
//backgroundColor: "#141821",
//backgroundImage: url("stars", true),
//backgroundSize: "cover",
