const fetch = require('node-fetch')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `works` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogListResult = await graphql(`
    query {
      allDevArticles {
        edges {
          node {
            article {
              id
              title
              readable_publish_date
              tags
              cover_image
              positive_reactions_count
              slug
              body_html
              url
            }
          }
        }
      }
    }
  `)
  const blogList = blogListResult.data.allDevArticles.edges.map(
    item => item.node.article
  )
  createPage({
    path: `/blog`,
    context: { blogList },
    component: require.resolve(`./src/templates/blog.js`),
  })

  for (const blogData of blogList) {
    blogData.cover_image = await fetch(blogData.cover_image)
      .then(data => data.buffer())
      .then(buffer => `data:image/jpeg;base64,${buffer.toString('base64')}`)
    createPage({
      path: `/blog/${blogData.slug}`,
      context: { blogData },
      component: require.resolve(`./src/templates/blog-single.js`),
    })
  }

  const allData = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              categoryName
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  const worksList = []
  for (const item of allData.data.allMarkdownRemark.edges) {
    const data = item.node
    const imagePath = item.node.fields.slug.substr(1)
    const imageData = await graphql(`
      query {
        file(relativePath: { eq: "${imagePath}thumb.jpg" }) {
          childImageSharp {
            fixed(width: 5, height: 5) {
              base64
            }
            fluid(maxHeight: 500, maxWidth: 500, quality: 100) {
              aspectRatio
              src
            }
          }
        }
      }
    `)
    data.thumbnail = imageData.data.file.childImageSharp
    worksList.push(data)
  }

  createPage({
    path: `/works`,
    component: require.resolve(`./src/templates/works.js`),
    context: { worksList },
  })

  for (const dataItem of worksList) {
    createPage({
      path: `/works${dataItem.fields.slug}`,
      context: { dataItem },
      component: require.resolve(`./src/templates/work-single.js`),
    })
  }
}
