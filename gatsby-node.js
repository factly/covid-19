const path = require('path');
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allWordpressPost(filter: {categories: { elemMatch: {wordpress_id: {eq: 420}}}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)

  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `/stories/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
};
