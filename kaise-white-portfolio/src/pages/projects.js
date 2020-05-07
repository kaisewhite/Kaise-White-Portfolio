import React from "react"
import Layout from "../components/layout"
import { Frame } from "framer"
import "../styles.css"
import ReactLogo from "../../static/stack/react-native.svg"

export default function Projects() {
  return (
    <Layout>
      <h1>Projects</h1>
      <p>This is a work in progress......</p>
      <Frame
        animate={{ y: [50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50] }}
        transition={{
          loop: Infinity,
          duration: 5,
          ease: "linear",
        }}
        size={50}
        background={"transparent"}
        radius={30}
      >
        <img src={ReactLogo} style={{ width: 50, height: 50 }}></img>
      </Frame>
    </Layout>
  )
}
