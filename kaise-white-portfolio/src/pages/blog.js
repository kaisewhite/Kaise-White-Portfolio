import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ButtonBase from "@material-ui/core/ButtonBase"

const Blog = () => {
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
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  //console.log(data.allMarkdownRemark.edges)
  const renderBlogPosts = data.allMarkdownRemark.edges.map(item => {
    return (
      <div key={item.node.frontmatter.key}>
        <Paper style={styles.root}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase style={styles.image}>
                <img
                  style={styles.img}
                  alt="broken"
                  src={item.node.frontmatter.coverPhotoURL}
                  resize={"contain"}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container style={{ marginLeft: 10 }}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {item.node.frontmatter.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.node.frontmatter.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.node.frontmatter.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  })

  return (
    <Layout style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <h1>Blog</h1>
        </div>
        <div style={{ flexDirection: "column" }}>{renderBlogPosts}</div>
      </div>
    </Layout>
  )
}

export default Blog

const styles = {
  root: {
    flexGrow: 1,
    width: 600,
    marginBottom: 20,
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
    margin: "auto",
    marginLeft: 20,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 5,
  },
}
