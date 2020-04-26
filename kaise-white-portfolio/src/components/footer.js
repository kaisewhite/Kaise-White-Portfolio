import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      <CssBaseline />

      <div
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
        </Toolbar>
      </div>
    </footer>
  )
}

export default Footer
