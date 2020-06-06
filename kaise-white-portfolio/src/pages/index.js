import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import Layout from "../components/layout"
import { Link } from "gatsby"

import Floating from "../components/floatingIcons"

import JavaScriptBackground from "../../static/JavascriptBackground.png"
import NPMLogo from "../../static/stack/npm.svg"
import JavaScriptLogo from "../../static/stack/JavaScript.svg"

import GatsbyLogo from "../../static/stack/Gatsby-Monogram.svg"
import MaterialUILogo from "../../static/stack/Material-UI.svg"
import FramerMotionLogo from "../../static/stack/framer-motion.png"
import NodeLogo from "../../static/stack/Node.svg"
import TypescriptLogo from "../../static/stack/typescript.svg"
import HTMLLogo from "../../static/stack/html.svg"
import FirebaseLogo from "../../static/stack/firebase.svg"
import CSSLogo from "../../static/stack/css.svg"
import GoogleLogo from "../../static/stack/google.svg"
import MongoLogo from "../../static/stack/mongo.svg"
import ReactLogo from "../../static/stack/React.svg"
import NetlifyLogo from "../../static/stack/netlify.png"
import AWSLogo from "../../static/stack/AWS.svg"
import UbuntuLogo from "../../static/stack/ubuntu.svg"
import GithubLogo from "../../static/stack/Github.svg"
import PythonLogo from "../../static/stack/python.svg"
import DockerLogo from "../../static/stack/docker.svg"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import Radio from "@material-ui/core/Radio"
import { useWindowSize } from "../helpers/index"
import { motion } from "framer-motion"

import indexStyles from "../css/index.module.scss"

const Index = () => {
  const size = useWindowSize()
  /************************** - BEGIN - Animations *********************** */
  const transition = {
    loop: Infinity,
    duration: 50,
    ease: "linear",
  }

  const AscendingAnimation = [0, 500, 0]
  const DescendingRowAnimation = [0, -500, 0]

  /************************** END - Animations *********************** */
  //
  //
  //
  //
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`
  return (
    <Layout>
      <div className={indexStyles.body}>
        <Parallax
          pages={2}
          style={{
            backgroundImage: `url("${JavaScriptBackground}")`,

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
              marginLeft: "5%",
            }}
          >
            <motion.div
              animate={{ y: AscendingAnimation }}
              transition={transition}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={HTMLLogo} style={styles.floatingImage} />
              <img src={NodeLogo} style={styles.floatingImage} />
              <img src={GatsbyLogo} style={styles.floatingImage} />
              <img src={JavaScriptLogo} style={styles.floatingImage} />
            </motion.div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={0}
            speed={0}
            factor={3}
            style={{
              // backgroundImage: url("stars", true),
              backgroundSize: "cover",
              marginLeft: "25%",
            }}
          >
            <motion.div
              animate={{ y: DescendingRowAnimation }}
              transition={transition}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={MaterialUILogo} style={styles.floatingImage} />
              <img src={DockerLogo} style={styles.floatingImage} />
              <img src={FramerMotionLogo} style={styles.floatingImage} />
              <img src={GoogleLogo} style={styles.floatingImage} />
            </motion.div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={0}
            speed={0}
            factor={3}
            style={{
              // backgroundImage: url("stars", true),
              backgroundSize: "cover",
              marginLeft: "45%",
            }}
          >
            <motion.div
              animate={{ y: AscendingAnimation }}
              transition={transition}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={CSSLogo} style={styles.floatingImage} />
              <img src={NPMLogo} style={styles.floatingImage} />
              <img src={FirebaseLogo} style={styles.floatingImage} />
              <img src={ReactLogo} style={styles.floatingImage} />
            </motion.div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={0}
            speed={0}
            factor={3}
            style={{
              // backgroundImage: url("stars", true),
              backgroundSize: "cover",
              marginLeft: "65%",
            }}
          >
            <motion.div
              animate={{ y: DescendingRowAnimation }}
              transition={transition}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={MongoLogo} style={styles.floatingImage} />
              <img src={TypescriptLogo} style={styles.floatingImage} />
              <img src={GoogleLogo} style={styles.floatingImage} />
              <img src={AWSLogo} style={styles.floatingImage} />
            </motion.div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={0}
            speed={0}
            factor={3}
            style={{
              // backgroundImage: url("stars", true),
              backgroundSize: "cover",
              marginLeft: "85%",
            }}
          >
            <motion.div
              animate={{ y: AscendingAnimation }}
              transition={transition}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={GithubLogo} style={styles.floatingImage} />
              <img src={NetlifyLogo} style={styles.floatingImage} />
              <img src={UbuntuLogo} style={styles.floatingImage} />
              <img src={PythonLogo} style={styles.floatingImage} />
            </motion.div>
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
                <Typography style={{ color: "#FFF", fontSize: 44 }}>
                  .
                </Typography>
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div>
                    <a
                      href="https://github.com/kaisewhite/"
                      target="_blank"
                      style={{
                        fontSize: 10,
                        textDecoration: "none",
                        color: "#FFF",
                      }}
                    >
                      <img src="https://img.icons8.com/nolan/64/github.png" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/kaisewhite/"
                      target="_blank"
                      style={{
                        fontSize: 10,
                        textDecoration: "none",
                        color: "#FFF",
                      }}
                    >
                      <img src="https://img.icons8.com/nolan/64/linkedin.png" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://1drv.ms/b/s!AmcEoCHIZvT7rp077S_n1m4Z9If8xg?e=1AxcTt"
                      target="_blank"
                      style={{
                        fontSize: 10,
                        textDecoration: "none",
                        color: "#FFF",
                      }}
                    >
                      <img src="https://img.icons8.com/nolan/64/skydrive.png" />
                    </a>
                  </div>
                </div>
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
                height: size.height * 0.45,
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
                <p></p>
                <p className={indexStyles.paragraph}>
                  I'm a full-stack developer with over 8 years of experience. I
                  specialize in backend development, database design & Dev Ops.
                  I'll lead/assist in developing the front-end and back-end in
                  addition to setting up CI/CD pipeline. My current toolset
                  includes ReactJS, Redux, SQL, JavaScript (ES6), Typescript,
                  Docker, AWS, Google Cloud & Firebase. This{" "}
                  <a
                    href="https://github.com/kaisewhite/Kaise-White-Portfolio/tree/master/kaise-white-portfolio"
                    target="_blank"
                  >
                    website
                  </a>{" "}
                  was built using GatsbyJS, ReactJS, & Netlify.
                </p>
                <p></p>
                <p className={indexStyles.paragraph}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/contact"
                  >
                    <Button variant="outlined" color="secondary" size="small">
                      Contact Me
                    </Button>
                  </Link>
                </p>
              </CardContent>
            </Card>
          </Parallax.Layer>
        </Parallax>
      </div>
    </Layout>
  )
}

const styles = {
  floatingImage: {
    display: "block",
    width: "10%",
    marginBottom: "15%",
    opacity: 0.1,
  },
}

export default Index
