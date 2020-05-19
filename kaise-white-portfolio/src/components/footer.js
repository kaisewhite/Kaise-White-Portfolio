import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { useState, useEffect } from "react"
import { useWindowSize } from "../helpers/index"

import { Link, graphql, useStaticQuery } from "gatsby"

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
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        display: "flex",
      }}
    >
      <CssBaseline />

      <div
        style={{
          width: size.width * 0.3,
          height: 100,
          backgroundColor: "#141821",
        }}
      ></div>
      <div
        style={{
          width: size.width * 0.4,
          height: 100,
          backgroundColor: "#141821",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography style={{ fontSize: 10, color: "#FFF" }}>
          ©2020 Created by Kaise White. All rights reserved.
        </Typography>
      </div>
      <div
        style={{
          width: size.width * 0.3,
          height: 100,
          backgroundColor: "#141821",
        }}
      ></div>
    </footer>
  )
}

export default Footer

/** Menu Bar */
//backgroundColor: "#141821",
//backgroundImage: url("stars", true),
//backgroundSize: "cover",
