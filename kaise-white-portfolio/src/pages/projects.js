import React, { useState } from "react"
import Layout from "../components/layout"
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
import GraphQL from "../../static/stack/graphql.svg"

import { useWindowSize } from "../helpers/index"

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
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const transition = {
    loop: Infinity,
    duration: 50,
    ease: "linear",
  }

  const AscendingAnimation = [0, 500, 0]
  const DescendingRowAnimation = [0, -500, 0]

  const renderBlogPosts = data.allMarkdownRemark.edges.map(item => {
    return (
      <ListItem key={item.node.frontmatter.key}>
        <motion.div
          key={item.node.frontmatter.key}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <h1>{item.node.frontmatter.title}</h1>
        </motion.div>
      </ListItem>
    )
  })

  return (
    <Layout>
      <h1>Projects</h1>
      <p>This is a work in progress......</p>
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
  blogPostTitle: {
    fontWeight: "700",
  },
  blogDesc: {
    color: "#FFF",
    fontWeight: "500",
  },
  blogDate: {
    color: "#FFF",
  },
}
