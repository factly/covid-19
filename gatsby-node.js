const path = require('path');
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query {
      allWordpressPost(filter: {jetpack_featured_media_url: {ne: null}, categories: { elemMatch: {wordpress_id: {eq: 420}}}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allItems(filter: {snippet:{thumbnails: {standard: {url:{ne: null}}}}}, sort: {fields: contentDetails___videoPublishedAt, order: DESC}) {
        totalCount
        edges {
          node {
            contentDetails {
              videoId
              videoPublishedAt(formatString: "MMMM Do, YYYY")
            }
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
  const videoTemplate = path.resolve(`./src/templates/videos.js`)

  result.data.allItems.edges.forEach(edge => {
    if(!edge.node.contentDetails) return false;
    createPage({
      // will be the url for the page
      path: `/videos/${edge.node.contentDetails.videoId}`,
      // specify the component template of your choice
      component: slash(videoTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.contentDetails.videoId,
      },
    })
  })
};
