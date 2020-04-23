import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import { shuffle } from "lodash"
import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import ReactLogo from "../../static/stack/react-native.svg"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"
import NetlifyLogo from "../../static/stack/netlify.png"
import FramerMotionLogo from "../../static/stack/framer-motion.png"
import AWSLogo from "../../static/stack/AWS.png"
import GithubLogo from "../../static/stack/Github.svg"
import MSSQLLogo from "../../static/stack/MSSQL.svg"
import NodeLogo from "../../static/stack/Node.svg"
import GoogleLogo from "../../static/stack/google.svg"
import TypescriptLogo from "../../static/stack/typescript.svg"
import NPMLogo from "../../static/stack/npm.svg"
import PythonLogo from "../../static/stack/python.svg"
import HTMLLogo from "../../static/stack/html.svg"
import FirebaseLogo from "../../static/stack/firebase.svg"
import CSSLogo from "../../static/stack/css.svg"
//import WindowsLogo from "../../static/stack/windows.png"
import UbuntuLogo from "../../static/stack/ubuntu.svg"

import { Link } from "gatsby"
import Header from "../components/header"
import { motion } from "framer-motion"

import "../styles.css"
import { Typography } from "@material-ui/core"

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

const spring = {
  type: "spring",
  damping: 40000,
  stiffness: 500,
  mass: 10,
}

/************************** START - Calculations for Animated Objects *********************** */
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
/************************** END - Calculations for Animated Objects *********************** */

const Index = () => {
  /************************** START - Hook for Animated Objects *********************** */
  const FirstRow = [
    JavaScriptLogo,
    TypescriptLogo,
    PythonLogo,
    MSSQLLogo,
    HTMLLogo,
    CSSLogo,
  ]

  const SecondRow = [
    ReactLogo,
    NodeLogo,
    GatsbyLogo,
    NetlifyLogo,
    MaterialUILogo,
    FramerMotionLogo,
  ]
  const ThirdRow = [
    AWSLogo,
    GoogleLogo,
    FirebaseLogo,
    GithubLogo,
    NPMLogo,
    UbuntuLogo,
  ]

  const [logosFirstRow, setlogosFirstRow] = useState(FirstRow)
  const [logosSecondRow, setlogosSecondRow] = useState(SecondRow)
  const [logosThirdRow, setlogosThirdRow] = useState(ThirdRow)

  useEffect(() => {
    setTimeout(() => setlogosFirstRow(shuffle(logosFirstRow)), 5000)
  }, [logosFirstRow])

  useEffect(() => {
    setTimeout(() => setlogosSecondRow(shuffle(logosSecondRow)), 6000)
  }, [logosSecondRow])

  useEffect(() => {
    setTimeout(() => setlogosThirdRow(shuffle(logosThirdRow)), 7000)
  }, [logosThirdRow])

  /************************** END - Hook for Animated Objects *********************** */

  /************************** START - Hook for Animated Objects *********************** */

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  /************************** END - Hook for Animated Objects *********************** */

  return (
    <div style={{ backgroundColor: "#141821" }}>
      <Header></Header>

      {/********************************************************************************* */}
      <Parallax
        pages={2}
        style={{
          backgroundColor: "#141821",
          backgroundImage: url("stars", true),
          backgroundSize: "auto",
        }}
      >
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#FFF" }} //805E73
        />

        <Parallax.Layer
          offset={0.9}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {logosFirstRow.map(source => (
            <motion.img
              key={source}
              src={source}
              layoutTransition={spring}
              style={{
                width: "5%",
                marginLeft: "2.5%",
                marginRight: "2.5%",
              }}
            />
          ))}
        </Parallax.Layer>
        <Parallax.Layer
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {logosSecondRow.map(source => (
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={source}
              src={source}
              layoutTransition={spring}
              style={{
                width: "5%",
                marginLeft: "2.5%",
                marginRight: "2.5%",
              }}
            />
          ))}
        </Parallax.Layer>

        <Parallax.Layer
          offset={1.2}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {logosThirdRow.map(source => (
            <motion.img
              key={source}
              src={source}
              layoutTransition={spring}
              style={{
                width: "5%",
                marginLeft: "2.5%",
                marginRight: "2.5%",
              }}
            />
          ))}
        </Parallax.Layer>

        <Parallax.Layer
          offset={0}
          speed={-0.3}
          style={{
            //backgroundSize: "80%",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "black",
              marginLeft: "20%",
              marginRight: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#FFF" }}>
              {" "}
              This particular website was build using a combination libraries.
              This particular website was build using a combination libraries.
              This particular website was build using a combination libraries.
              This particular website was build using a combination libraries.
            </p>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#FFF",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  marginRight: "10%",
                  width: 250,
                }}
              >
                <h3>Front End</h3>
                <ul style={{ paddingLeft: "15%" }}>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>GatsbyJS</li>
                  <li>JSX</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  marginLeft: "10%",
                  width: 250,
                }}
              >
                <h3>Back End</h3>
                <ul style={{ paddingLeft: "15%" }}>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Netlify</li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                </ul>
              </div>
            </div>
          </div>
        </Parallax.Layer>
      </Parallax>
    </div>
  )
}

export default Index
