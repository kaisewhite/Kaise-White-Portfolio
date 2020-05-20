import React, { useState } from "react"
import Layout from "../components/layout"
import { Frame } from "framer"
import "../styles.css"
import ReactLogo from "../../static/stack/react-native.svg"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { red, blue, green } from "@material-ui/core/colors"
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel"

const Projects = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <p>This is a work in progress......</p>
    </Layout>
  )
}

export default Projects
