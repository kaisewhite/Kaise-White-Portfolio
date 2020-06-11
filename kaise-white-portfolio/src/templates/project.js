import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import ProjectStyles from "../css/project.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <div className={ProjectStyles.body}>
        <h1 className={ProjectStyles.title}>
          {props.data.markdownRemark.frontmatter.title}{" "}
        </h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          className={ProjectStyles.ProjectPost}
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default Project
