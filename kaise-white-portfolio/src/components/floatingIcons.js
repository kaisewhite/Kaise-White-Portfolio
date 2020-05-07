import React from "react"
import FramerMotionLogo from "../../static/stack/framer-motion.png"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"
import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import ReactLogo from "../../static/stack/react-native.svg"
import FirebaseLogo from "../../static/stack/firebase.svg"
import TypescriptLogo from "../../static/stack/typescript.svg"
import { useWindowSize } from "../helpers/index"
import { motion } from "framer-motion"

import { Frame } from "framer"

const Floating = () => {
  const size = useWindowSize()
  const mLeft = 10
  const mRight = 10
  const imageWidth = "10%"
  const transition = {
    loop: Infinity,
    duration: 5,
    ease: "linear",
  }
  return (
    <div
      style={{
        //backgroundColor: "#FFF",
        height: 100,
        width: size.width * 0.6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        animate={{
          y: [40, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40],
        }}
        transition={transition}
        src={FirebaseLogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>

      <motion.img
        animate={{ y: [0, 10, 20, 30, 40, 50, 40, 30, 20, 10, 0] }}
        transition={{
          loop: Infinity,
          duration: 5,
          ease: "linear",
        }}
        src={JavaScriptLogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>
      <motion.img
        animate={{
          y: [20, 30, 40, 50, 40, 30, 20, 10, 0, 10, 20],
        }}
        transition={transition}
        src={TypescriptLogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>
      <motion.img
        animate={{
          y: [40, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40],
        }}
        transition={transition}
        src={FramerMotionLogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>
      <motion.img
        animate={{
          y: [60, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60],
        }}
        transition={transition}
        src={GatsbyLogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>
      <motion.img
        animate={{
          y: [40, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40],
        }}
        transition={transition}
        src={MaterialUILogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>
      <motion.img
        animate={{
          y: [60, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60],
        }}
        transition={transition}
        src={ReactLogo}
        style={{ width: imageWidth, marginLeft: mLeft, marginRight: mRight }}
      ></motion.img>
    </div>
  )
}

/** style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} */
export default Floating

/** <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
        <Frame
          animate={{ y: [30, 20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20, 30] }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "linear",
          }}
          size={50}
          background={"transparent"}
        >
          <img src={JavaScriptLogo} style={{ width: imageWidth }}></img>
        </Frame>
      </div>
      <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
        <Frame
          animate={{ y: [30, 20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20, 30] }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "linear",
          }}
          size={50}
          background={"transparent"}
        >
          <img src={ReactLogo} style={{ width: imageWidth }}></img>
        </Frame>
      </div>
      <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
        <Frame
          animate={{ y: [30, 20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20, 30] }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "linear",
          }}
          size={50}
          background={"transparent"}
        >
          <img src={MaterialUILogo} style={{ width: imageWidth }}></img>
        </Frame>
      </div>
      <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
        <Frame
          animate={{ y: [30, 20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20, 30] }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "linear",
          }}
          size={50}
          background={"transparent"}
        >
          <img src={GatsbyLogo} style={{ width: imageWidth }}></img>
        </Frame>
      </div>
      <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
        <Frame
          animate={{ y: [30, 20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20, 30] }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "linear",
          }}
          size={50}
          background={"transparent"}
        >
          <img src={FirebaseLogo} style={{ width: imageWidth }}></img>
        </Frame>
      </div>
      <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
        <Frame
          animate={{ y: [30, 20, 10, 0, 10, 20, 30, 40, 50, 40, 30, 20, 30] }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "linear",
          }}
          size={50}
          background={"transparent"}
        >
          <img src={TypescriptLogo} style={{ width: imageWidth }}></img>
        </Frame>
      </div> */
