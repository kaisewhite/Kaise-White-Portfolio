import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import { useSpring, animated } from "react-spring"
import { useState, useEffect } from "react"
import { shuffle } from "lodash"
import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import ReactLogo from "../../static/stack/react-native.svg"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"
import FramerMotionLogo from "../../static/stack/framer-motion.png"

import FirebaseLogo from "../../static/stack/firebase.svg"
import TypescriptLogo from "../../static/stack/typescript.svg"

import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
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
  const initialLogos = [
    //GoogleLogo,
    JavaScriptLogo,
    GatsbyLogo,
    ReactLogo,
    MaterialUILogo,
    FirebaseLogo,
    FramerMotionLogo,
    TypescriptLogo,
  ]

  const [logos, setLogos] = useState(initialLogos)

  useEffect(() => {
    setTimeout(() => setLogos(shuffle(logos)), 2000)
  }, [logos])

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
        pages={3}
        style={{
          backgroundColor: "#141821",
          backgroundImage: url("stars", true),
          backgroundSize: "auto",
        }}
      >
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <Parallax.Layer
          offset={2}
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
        ></Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
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
          {logos.map(source => (
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
          offset={0.2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography style={{ color: "#FFF" }}>
            I specialize in full-stack development in addition to UX/UX design
            in order to bring brilliant digital ideas into being.
          </Typography>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        ></Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {}}
        >
          <animated.img
            src={url("clients-main")}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ width: "40%", transform: props.xys.interpolate(trans) }}
          />
        </Parallax.Layer>
        <Footer></Footer>
      </Parallax>
    </div>
  )
}

export default Index
