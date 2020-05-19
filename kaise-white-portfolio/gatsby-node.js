const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    //console.log(JSON.stringify(node, undefined, 4))
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(blogTemplate)
  /**
   * 1. Get path to template
   * 2. Get markdown data
   * 3. Create new Pages
   */

  //console.log(res)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
