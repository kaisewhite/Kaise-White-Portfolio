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

  const transition = {
    loop: Infinity,
    duration: 5,
    ease: "linear",
  }

  const firebaseAnimation = [100, 80, 60, 40, 20, 0, 20, 40, 60, 80, 100]
  const javascriptAnimation = [80, 60, 40, 20, 0, 20, 40, 60, 80, 100, 80]
  const typescriptAnimation = [60, 40, 20, 0, 20, 40, 60, 80, 100, 80, 60]
  const framermotionAnimation = [40, 20, 0, 20, 40, 60, 80, 100, 80, 60, 40]
  const gatsbyAnimation = [20, 0, 20, 40, 60, 80, 100, 80, 60, 40, 20]
  const reactAnimation = [0, 20, 40, 60, 80, 100, 80, 60, 40, 20, 0]
  const materialAnimation = [20, 0, 20, 40, 60, 80, 100, 80, 60, 40, 20]

  return (
    <div
      style={{
        //backgroundColor: "#FFF",
        height: 200,
        width: size.width * 0.6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        animate={{
          y: firebaseAnimation,
        }}
        transition={transition}
        src={FirebaseLogo}
        style={styles.img}
      ></motion.img>

      <motion.img
        animate={{ y: javascriptAnimation }}
        transition={{
          loop: Infinity,
          duration: 5,
          ease: "linear",
        }}
        src={JavaScriptLogo}
        style={styles.img}
      ></motion.img>
      <motion.img
        animate={{
          y: typescriptAnimation,
        }}
        transition={transition}
        src={TypescriptLogo}
        style={styles.img}
      ></motion.img>
      <motion.img
        animate={{
          y: framermotionAnimation,
        }}
        transition={transition}
        src={FramerMotionLogo}
        style={styles.img}
      ></motion.img>
      <motion.img
        animate={{
          y: gatsbyAnimation,
        }}
        transition={transition}
        src={GatsbyLogo}
        style={styles.img}
      ></motion.img>
      <motion.img
        animate={{
          y: materialAnimation,
        }}
        transition={transition}
        src={MaterialUILogo}
        style={styles.img}
      ></motion.img>
      <motion.img
        animate={{
          y: reactAnimation,
        }}
        transition={transition}
        src={ReactLogo}
        style={styles.img}
      ></motion.img>
    </div>
  )
}

export default Floating

const styles = {
  img: {
    width: "10%",
    marginLeft: 10,
    marginRight: 10,
  },
}
