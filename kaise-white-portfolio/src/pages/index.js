import React from "react"
import { Parallax } from "react-spring/renderprops-addons"

import Floating from "../components/floatingIcons"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"

import JavaScriptBackground from "../../static/JavascriptBackground.png"
import NPMLogo from "../../static/stack/npm.svg"
import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import FramerMotionLogo from "../../static/stack/framer-motion.png"
import NodeLogo from "../../static/stack/Node.svg"
import TypescriptLogo from "../../static/stack/typescript.svg"
import HTMLLogo from "../../static/stack/html.svg"
import FirebaseLogo from "../../static/stack/firebase.svg"
import CSSLogo from "../../static/stack/css.svg"

import Card from "@material-ui/core/Card"
//import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
//import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Radio from "@material-ui/core/Radio"
//import RadioGroup from "@material-ui/core/RadioGroup"
//import FormControlLabel from "@material-ui/core/FormControlLabel"
//import FormControl from "@material-ui/core/FormControl"
//import FormLabel from "@material-ui/core/FormLabel"

import { useWindowSize } from "../helpers/index"

import Header from "../components/header"
import Footer from "../components/footer"
import { motion } from "framer-motion"

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

const Index = () => {
  const size = useWindowSize()
  /************************** - BEGIN - Animations *********************** */
  const transition = {
    loop: Infinity,
    duration: 50,
    ease: "linear",
  }

  const HTMLAnimation = [0, 400, 0]
  const JSAnimation = [120, 520, 120]

  const MaterialAnimation = [300, -100, 300]
  const NPMAnimation = [-100, -500, -100]

  const NodeAnimation = [-400, 0, -400]
  const TSAnimation = [-200, 200, -200]

  const GatsbyAnimation = [-500, -1000, -500]
  const CSSAnimation = [-100, -500, -100]

  const FirebaseAnimation = [-1000, -500, -1000]
  const FramerAnimation = [-800, -300, -800]

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
              marginLeft: "5%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: MaterialAnimation,
            }}
            transition={transition}
            src={MaterialUILogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "25%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: NPMAnimation,
            }}
            transition={transition}
            src={NPMLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "25%",
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
              width: "10%",
              marginLeft: "50%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: TSAnimation,
            }}
            transition={transition}
            src={TypescriptLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "50%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: CSSAnimation,
            }}
            transition={transition}
            src={CSSLogo}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "65%",
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
              marginLeft: "65%",
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
              marginLeft: "85%",
              opacity: 0.1,
            }}
          />
          <motion.img
            animate={{
              y: FramerAnimation,
            }}
            transition={transition}
            src={FramerMotionLogo}
            style={{
              display: "block",
              width: "10%",
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
          {/** <img src={url("clients-main")} style={{ width: "40%" }} /> */}
          <Card
            style={{
              height: size.height * 0.4,
              width: size.width * 0.45,
              borderRadius: 10,
            }}
          >
            <CardContent
              style={{
                backgroundColor: "#d8d8d8",
                height: size.height * 0.06,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Radio
                disabled
                style={{
                  color: "#ff483f",
                  backgroundColor: "#ff483f",
                  height: size.height * 0.005,
                  width: size.width * 0.005,
                  marginTop: 5,
                  marginRight: 5,
                }}
              ></Radio>
              <Radio
                disabled
                style={{
                  color: "#ecbb38",
                  backgroundColor: "#ecbb38",
                  height: size.height * 0.005,
                  width: size.width * 0.005,
                  marginTop: 5,
                  marginRight: 5,
                  marginLeft: 5,
                }}
              ></Radio>
              <Radio
                disabled
                style={{
                  color: "#36d3a8",
                  backgroundColor: "#36d3a8",
                  height: size.height * 0.005,
                  width: size.width * 0.005,
                  marginTop: 5,
                  marginRight: 5,
                  marginLeft: 5,
                }}
              ></Radio>
            </CardContent>
            <CardContent>
              <Typography>About Me</Typography>
            </CardContent>
          </Card>
        </Parallax.Layer>
        <Footer></Footer>
      </Parallax>
    </div>
  )
}

export default Index
