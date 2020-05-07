const fetch = require('node-fetch')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.onCreateNode = async ({
  node,
  getNode,
  actions: { createNode, createNodeField },
  store,
  cache,
  createNodeId,
}) => {
  // creating item slug for work
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `work` })
    createNodeField({
      node,
      name: `slug`,
      value: slug.replace(/\//g, ''),
    })
  }

  // creating featured image for blog
  if (node.internal.type === `DevArticles` && node.article.cover_image) {
    const url = node.article.cover_image
    const parentNodeId = node.id
    let fileNode = await createRemoteFileNode({
      url,
      store,
      cache,
      createNode,
      createNodeId,
      parentNodeId,
    })
    if (fileNode) {
      node.cover_image___NODE = fileNode.id
    }
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // populating blog
  const blogListResult = await graphql(`
    query {
      allDevArticles {
        edges {
          node {
            article {
              slug
            }
          }
        }
      }
    }
  `)
  const blogSlugList = blogListResult.data.allDevArticles.edges.map((item) => {
    return item.node.article.slug
  })
  for (const slug of blogSlugList) {
    createPage({
      path: `/blog/${slug}`,
      context: { slug },
      component: require.resolve(`./src/templates/blog.js`),
    })
  }

  // populating work
  const workListResult = await graphql(`
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

  const workSlugList = workListResult.data.allMarkdownRemark.edges.map(
    (item) => {
      return item.node.fields.slug
    }
  )
  for (const slug of workSlugList) {
    createPage({
      path: `/work/${slug}`,
      context: { slug },
      component: require.resolve(`./src/templates/work.js`),
    })
  }
}
