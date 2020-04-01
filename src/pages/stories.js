import React from 'react';
import Img  from 'gatsby-image';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby'

function Stories ({ data }) {
    return <Layout>
        <div className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="heading">
                <h1>BROWSING: Stories</h1>
            </div>
            <div className="row">   
            {data.allWordpressPost.edges.map(post => <div key={post.node.wordpress_id} className="col col-6">
                    <article>
                        <span className="cat-title">Coronavirus</span>
                        <Link className="image-link" to={`/stories/${post.node.slug}`}>
                            {
                                post.node.jetpack_featured_media_url.localFile ? 
                                    <Img fluid={post.node.jetpack_featured_media_url.localFile.childImageSharp.fluid} /> : 
                                    <img src={post.node.jetpack_featured_media_url.source_url} />
                            }
                        </Link>
                        <div className="title">
                            <h2>
                                <Link to={`/stories/${post.node.slug}`} dangerouslySetInnerHTML={{__html: `${post.node.title}`}}></Link>
                            </h2>
                        </div>
                        <div className="meta-info">
                            <span className="author">By {post.node.author_meta.display_name}</span>
                            <span className="date"> On {post.node.date}</span>
                        </div>
                        <div className="excerpt" dangerouslySetInnerHTML={{ __html: `${post.node.excerpt.substring(0,200)}...`}} />
                    </article>
                </div>)}
            </div>
        </div>
    </Layout>
}

export default Stories;
// localFile{
//     childImageSharp{
//       fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
export const query = graphql`
  query {
    allWordpressPost(sort: {fields: date,order:DESC}, filter: {categories: { elemMatch: {wordpress_id: {eq: 420}}}}) {
        totalCount
        edges {
          node {
            wordpress_id
            excerpt
            title
            slug
            jetpack_featured_media_url {
                source_url
            }
            date(formatString: "MMMM Do, YYYY")
            author_meta {
                display_name
            }
            categories {
                name
            }
          }
        }
      }
  }
`;
/*
Row
Column
Article
Image
Title
Author 
Info
*/