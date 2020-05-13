import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import { shuffle } from "lodash"
import Floating from "../components/floatingIcons"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"

import JavaScriptBackground from "../../static/JavascriptBackground.png"
import AWSLogo from "../../static/stack/AWS.png"
import GCPlogo from "../../static/stack/GCP.png"
import NPMLogo from "../../static/stack/npm.svg"
import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import ReactLogo from "../../static/stack/react-native.svg"
import NetlifyLogo from "../../static/stack/netlify.png"
import FramerMotionLogo from "../../static/stack/framer-motion.png"
import GithubLogo from "../../static/stack/Github.svg"
import MSSQLLogo from "../../static/stack/MSSQL.svg"
import NodeLogo from "../../static/stack/Node.svg"
import TypescriptLogo from "../../static/stack/typescript.svg"
import PythonLogo from "../../static/stack/python.svg"
import HTMLLogo from "../../static/stack/html.svg"
import FirebaseLogo from "../../static/stack/firebase.svg"
import CSSLogo from "../../static/stack/css.svg"
//import WindowsLogo from "../../static/stack/windows.png"
import UbuntuLogo from "../../static/stack/ubuntu.svg"

import Header from "../components/header"
import Footer from "../components/footer"
import { motion } from "framer-motion"

import { Typography } from "@material-ui/core"

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

const Index = () => {
  /************************** - BEGIN - Animations *********************** */
  const transition = {
    loop: Infinity,
    duration: 50,
    ease: "linear",
  }

  const HTMLAnimation = [0, 400, 0]
  const JSAnimation = [0, 300, 0]
  const UbuntuAnimation = [0, -300, 0]
  const MaterialUIAnimation = [0, -300, 0]
  const GatsbyAnimation = [0, -200, 0]
  const FirebaseAnimation = [0, -600, 0]
  const NodeAnimation = [0, -400]

  /************************** END - Animations *********************** */

  return (
    <div style={{ backgroundColor: "#141821" }}>
      <Header></Header>

      {/********************************************************************************* */}
      <Parallax
        pages={2}
        style={{
          backgroundColor: "#141821",
          backgroundImage: `url("${JavaScriptBackground}")`,
          //backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      >
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <Parallax.Layer
          offset={0}
          speed={0}
          factor={3}
          style={{
            // backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        >
          <motion.img
            animate={{
              y: HTMLAnimation,
            }}
            transition={transition}
            src={HTMLLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "5%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: JSAnimation,
            }}
            transition={transition}
            src={JavaScriptLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "15%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: UbuntuAnimation,
            }}
            transition={transition}
            src={UbuntuLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "30%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: MaterialUIAnimation,
            }}
            transition={transition}
            src={MaterialUILogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "45%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: GatsbyAnimation,
            }}
            transition={transition}
            src={GatsbyLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "60%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: FirebaseAnimation,
            }}
            transition={transition}
            src={FirebaseLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "75%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: NodeAnimation,
            }}
            transition={transition}
            src={NodeLogo}
            style={{
              display: "block",
              width: "20%",
              marginLeft: "85%",
              opacity: 0.1,
            }}
          />
        </Parallax.Layer>

        <Parallax.Layer
          offset={-0.15}
          speed={0.1}
          style={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/** <Floating></Floating> */}
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={0}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <Typography style={{ color: "#FFF", fontSize: 44 }}>
                Hello, I'm
              </Typography>

              <Typography
                style={{ color: "#e31b6d", fontSize: 44, marginLeft: 10 }}
              >
                Kaise White
              </Typography>
              <Typography style={{ color: "#FFF", fontSize: 44 }}>.</Typography>
            </div>
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ color: "#FFF", fontSize: 24 }}>
                I'm a full-stack developer with a passion for designing
              </Typography>
              <Typography style={{ color: "#FFF", fontSize: 24 }}>
                beautiful and functional user experiences.
              </Typography>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        ></Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {}}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} />
        </Parallax.Layer>
        <Footer></Footer>
      </Parallax>
    </div>
  )
}

export default Index
