const fetch = require('node-fetch')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `work` })
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
    if (blogData.cover_image) {
      blogData.cover_image = await fetch(blogData.cover_image)
        .then(data => data.buffer())
        .then(buffer => `data:image/jpeg;base64,${buffer.toString('base64')}`)
    }
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
              subTitle
              tags
              url
              thumbnail
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

  const workList = allData.data.allMarkdownRemark.edges.map(item => {
    item.node.fields.slug = item.node.fields.slug.replace(/\\|\//g, '')
    return item.node
  })

  for (let i = workList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = workList[i]
    workList[i] = workList[j]
    workList[j] = temp
  }

  createPage({
    path: `/work`,
    component: require.resolve(`./src/templates/work.js`),
    context: { workList },
  })

  for (const dataItem of workList) {
    createPage({
      path: `/work/${dataItem.fields.slug}`,
      context: { dataItem },
      component: require.resolve(`./src/templates/work-single.js`),
    })
  }
}
