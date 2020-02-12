const fetch = require('node-fetch')

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
}
