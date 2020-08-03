import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "../css/blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
        readTime
        coverPhotoURL
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={blogStyles.body}>
        <h1 className={blogStyles.title}>
          {props.data.markdownRemark.frontmatter.title}{" "}
        </h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          className={blogStyles.blogPost}
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog
