const request = require('request').defaults({ encoding: null })

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

  blogList.forEach(blogData => {
    request.get(blogData.cover_image, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        blogData.cover_image = `data:${
          response.headers['content-type']
        };base64,${new Buffer(body).toString('base64')}`
        createPage({
          path: `/blog/${blogData.slug}`,
          context: { blogData },
          component: require.resolve(`./src/templates/blog-single.js`),
        })
      }
    })
  })
}
