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

import { useWindowSize } from "../helpers/index"
import projectStyles from "../css/project.module.scss"

const Projects = () => {
  const size = useWindowSize()

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              key
              title
              date
              description
              readTime
              coverPhotoURL
              tags
              banner
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const lightColors = [
    "#F57C00", //Firebase Orange
    "#FFCA28", //Firebase yellow
    "#FFA000", //Firebase Amber
    "#f0db4f", //JavaScript Minion yellow
    "#FF8A65", //Firebase Coral
    "#f44336",
    "#e91e63",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#76ff03",
  ]

  const darkColors = [
    "#007acc", //TypeScript Blue
    "#663399", //Gatsby Purple
    "#039BE5", //Firebase Blue
    "#2C384A", //Firebase Grey
    "#7b1fa2",
    "#4a148c",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#ff5722",
    "#607d8b",
  ]

  const logos = [
    { icon: JavaScriptLogo, name: "javascript" },
    { icon: ReactLogo, name: "react" },
    { icon: GatsbyLogo, name: "gatsby" },
    { icon: NodeLogo, name: "node" },
    { icon: GraphQL, name: "graphql" },
    { icon: TypescriptLogo, name: "typescript" },
    { icon: FirebaseLogo, name: "firebase" },
    { icon: DockerLogo, name: "docker" },
    { icon: MSSQLLogo, name: "sql" },
  ]

  const [filter, setFilter] = useState()

  const filterButtons = logos.map(item => {
    return (
      <div
        key={item.name}
        className={projectStyles.icons}
        onClick={() => setFilter(item.name)}
      >
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          src={item.icon}
          style={styles.icon}
        />
      </div>
    )
  })

  const renderProjects = data.allMarkdownRemark.edges
    .filter(item => item.node.frontmatter.type === "project")
    //.filter(item => item.node.frontmatter.tags.includes())
    .map(item => {
      return (
        <ListItem key={item.node.frontmatter.key}>
          <Link
            to={`/blog/${item.node.fields.slug}`}
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.8 }}>
              <Paper
                style={{
                  flexGrow: 1,
                  width: 400,
                  height: 140,
                  marginBottom: "10%",
                  //backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  background: `linear-gradient(to top left, ${
                    lightColors[Math.floor(Math.random() * lightColors.length)]
                  }, ${
                    darkColors[Math.floor(Math.random() * lightColors.length)]
                  })`,
                  //color: colors[Math.floor(Math.random() * colors.length)],
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      width: 290,
                      height: 140,
                      backgroundColor: "",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ height: 50, backgroundColor: "" }}>
                      <p
                        style={{
                          paddingLeft: 10,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#FFF",
                        }}
                      >
                        {item.node.frontmatter.date}
                      </p>
                    </div>
                    <div
                      style={{
                        height: 90,
                        backgroundColor: "",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h5"
                        style={{ color: "#FFF", paddingLeft: 10 }}
                      >
                        {item.node.frontmatter.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#FFF", paddingLeft: 12, fontSize: 12 }}
                      >
                        {item.node.frontmatter.description}
                      </Typography>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 110,
                      height: 140,
                      backgroundColor: "",
                      paddingRight: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      //opacity: 0.5,
                    }}
                  >
                    <img
                      //images[Math.floor(Math.random() * colors.length)]
                      src={item.node.frontmatter.banner}
                    />
                  </div>
                </div>
              </Paper>
            </motion.div>
          </Link>
        </ListItem>
      )
    })

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
                marginBottom: 100,
              }}
            >
              Projects
            </Typography>

            <GridList
              cols={2}
              container
              spacing={3}
              direction={"column"}
              style={{
                overflow: "auto",
                width: size.width * 0.8,

                display: "flex",
                justifyContent: "center",
                marginBottom: 50,
              }}
            >
              {renderProjects.map(n => {
                const key = n.key
                return (
                  <div
                    key={key}
                    num={n}
                    style={{ height: "auto", width: "auto" }}
                  >
                    {n}
                  </div>
                )
              })}
            </GridList>
          </Parallax.Layer>
        </Parallax>
      </div>
    </Layout>
  )
}

export default Projects

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
