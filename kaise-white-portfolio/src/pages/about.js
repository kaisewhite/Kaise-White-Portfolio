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
import Footer from "../components/footer"

//import { Link } from "gatsby"
import Header from "../components/header"
import { motion } from "framer-motion"

import "../styles.css"
//import { Typography } from "@material-ui/core"

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
        pages={2.3}
        style={{
          backgroundColor: "#141821",
          backgroundImage: url("stars", true),
          backgroundSize: "auto",
        }}
      >
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{
            backgroundColor: "#87BCDE",
            backgroundImage: url("stars", true),
          }} //805E73
        />
        <Parallax.Layer
          offset={1.7}
          speed={1}
          style={{
            backgroundColor: "#87BCDE",
            backgroundImage: url("stars", true),
          }} //805E73
        />
        <Parallax.Layer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ marginBottom: "30%", color: "#FFF" }}>ABOUT</h1>
        </Parallax.Layer>
        <Parallax.Layer
          offset={0}
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
                marginBottom: "10%",
              }}
            />
          ))}
        </Parallax.Layer>
        <Parallax.Layer
          offset={0.2}
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
                marginBottom: "10%",
              }}
            />
          ))}
        </Parallax.Layer>
        <Parallax.Layer
          offset={0.4}
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
                marginBottom: "10%",
              }}
            />
          ))}
        </Parallax.Layer>
        {/************************************** TEXT ***************************************** */}
        <Parallax.Layer
          offset={1.15}
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
              color: "white",

              marginLeft: "20%",
              marginRight: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#FFF" }}>
              {" "}
              I'm a full-stack software engineer with finely honed development
              and leadership skills. I started in databases and back-end
              development then pivoted into full-stack to gain a better
              understanding on architecture and how these different systems work
              together.
            </p>
            <p style={{ color: "#FFF" }}>
              {" "}
              All told, I have over 10 years of professional software
              engineering experience total spanning a large range of
              technologies -- everything including mobile, web, scalable
              backends, data processing, and databases. This website was built
              using JS, ReactJS, GatsbyJS, Material-UI, Framer Motion,
              React-Spring & Netlify. These are a few the other tools I use on a
              daily basis:
            </p>

            {/********************* First Row of UL (unordered list) *************** */}
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#FFF",
                fontSize: 10,
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  marginRight: "10%",
                  width: 300,
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
                  width: 300,
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
            {/********************* Second Row *************** */}
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#FFF",
                fontSize: 10,
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  marginRight: "10%",
                  width: 300,
                }}
              >
                <h3>Cloud</h3>
                <ul style={{ paddingLeft: "15%" }}>
                  <li>
                    AWS: IAM, Cognito, EC2, RDS, S3, Lambda, CloudWatch, Amplify
                  </li>
                  <li>
                    Google Cloud: Cloud SQL, Cloud Storage, Cloud Functions
                  </li>
                  <li>Firebase: Auth, Firestore, Storage, Functions</li>
                  <li style={{ color: "transparent" }}> Empty </li>
                </ul>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  marginLeft: "10%",
                  width: 300,
                }}
              >
                <h3>Databases</h3>
                <ul style={{ paddingLeft: "15%" }}>
                  <li>Microsoft SQL Server</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Firestore</li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                </ul>
              </div>
            </div>
            {/********************* Third Row *************** */}
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#FFF",
                fontSize: 10,
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  marginRight: "10%",
                  width: 300,
                }}
              >
                <h3>Dev Ops</h3>
                <ul style={{ paddingLeft: "15%" }}>
                  <li>GitHub</li>
                  <li>AWS CodeCommit</li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                </ul>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  marginLeft: "10%",
                  width: 300,
                }}
              >
                <h3>Languages</h3>
                <ul style={{ paddingLeft: "15%" }}>
                  <li>JavaScript</li>
                  <li>T-SQL</li>
                  <li>Python</li>
                  <li>Bash/Shell</li>
                  <li>PowerShell</li>
                  <li style={{ color: "transparent" }}> Empty </li>
                  <li style={{ color: "transparent" }}> Empty </li>
                </ul>
              </div>
            </div>
          </div>
        </Parallax.Layer>
        <Footer></Footer>
      </Parallax>
    </div>
  )
}

export default Index
