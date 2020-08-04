import React, { useState } from "react"
import Layout from "../components/layout"
import { Parallax } from "react-spring/renderprops-addons"

import { Frame } from "framer"
import "../styles.css"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { red, blue, green } from "@material-ui/core/colors"
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel"
import { graphql, useStaticQuery, Link } from "gatsby"
import { motion } from "framer-motion"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import GridList from "@material-ui/core/GridList"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
//import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"

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
import NetlifyLogo from "../../static/stack/Netlify.png"
import AWSLogo from "../../static/stack/AWS.svg"
import UbuntuLogo from "../../static/stack/ubuntu.svg"
import GithubLogo from "../../static/stack/Github.svg"
import PythonLogo from "../../static/stack/python.svg"
import DockerLogo from "../../static/stack/docker.svg"
import GraphQL from "../../static/stack/graphql.svg"
import MSSQLLogo from "../../static/stack/MSSQL.svg"

import projectStyles from "../css/project.module.scss"

const Contact = () => {
  const transition = {
    loop: Infinity,
    duration: 50,
    ease: "linear",
  }

  const AscendingAnimation = [0, 500, 0]
  const DescendingRowAnimation = [0, -500, 0]

  return (
    <Layout>
      <div className={projectStyles.body}>
        <Parallax
          pages={1}
          scrolling={false}
          style={{
            backgroundImage: `url("${JavaScriptBackground}")`,
            position: "absolute",
            backgroundSize: "cover",
          }}
        >
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
            offset={0}
            speed={0}
            style={{
              //backgroundSize: "80%",
              backgroundPosition: "center",
              display: "flex",
              //marginTop: "5%",
              alignItems: "center",

              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                color: "#FFF",
                fontWeight: 500,
                fontSize: 40,
                marginBottom: 50,
              }}
            >
              Contact
            </Typography>

            <Typography
              style={{
                color: "#FFF",
                fontWeight: 500,
                fontSize: 18,
                marginBottom: 25,
              }}
            >
              Have a question or want to work together?
            </Typography>
            <Card className="card">
              <CardContent>
                <form>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: 360 }}
                  />
                </form>
                <form>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: 360 }}
                  />
                </form>
                <form>
                  <TextareaAutosize
                    rowsMin={4}
                    aria-label="maximum height"
                    placeholder="Message"
                    style={{
                      width: 360,
                      borderRadius: 5,
                      borderColor: "#D3D3D3",
                    }}
                  />
                </form>
                <div className="buttonGroup">
                  <div>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#141821", color: "white" }}
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Parallax.Layer>
        </Parallax>
      </div>
    </Layout>
  )
}

export default Contact

const styles = {
  floatingImage: {
    display: "block",
    width: "10%",
    marginBottom: "15%",
    opacity: 0.1,
  },
  root: {
    flexGrow: 1,
    width: 500,
    marginBottom: "10%",
    backgroundColor: "#8a4baf",
  },
  icon: {
    width: 70,
    padding: 10,
  },
  title: {
    marginLeft: 20,
  },
  paper: {
    padding: 2,
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  linkTitle: {
    color: "#FFF",
    textDecoration: "none",
  },
  projectPostTitle: {
    fontWeight: "700",
  },
  projectDesc: {
    color: "#FFF",
    fontWeight: "500",
  },
  projectDate: {
    color: "#FFF",
  },
}
