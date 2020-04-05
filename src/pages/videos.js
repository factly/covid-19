import React from 'react';
import Img  from 'gatsby-image';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby'

function Videos ({ data }) {
    return <Layout>
        <div className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="heading">
                <h1>BROWSING: Videos</h1>
            </div>
            <div className="row">   
            {data.allItems.edges.map(video => video.node.snippet && <div key={video.node.snippet.id} className="col col-4">
                    <article>
                        {/* <span className="cat-title">Coronavirus</span> */}
                        <Link className="image-link" to={`/videos/${video.node.contentDetails.videoId}`}>
                            <Img alt={video.node.snippet.title} fluid={video.node.snippet.thumbnails.standard.local.childImageSharp.fluid} />
                        </Link>
                        <div className="title">
                            <h2>
                                <Link to={`/videos/${video.node.contentDetails.videoId}`} dangerouslySetInnerHTML={{__html: `${video.node.snippet.title}`}}></Link>
                            </h2>
                        </div>
                        <div className="meta-info">
                            {/* <span className="author">By {video.node.snippet.channelTitle}</span> */}
                            <span className="date">{video.node.contentDetails.videoPublishedAt}</span>
                        </div>
                        {/* <div className="excerpt" dangerouslySetInnerHTML={{ __html: `${video.node.excerpt.substring(0,200)}...`}} /> */}
                    </article>
                </div>)}
            </div>
        </div>
    </Layout>
}

export default Videos;

export const query = graphql`
  query {
    allItems(filter: {snippet:{thumbnails: {standard: {url:{ne: null}}}}}, sort: {fields: contentDetails___videoPublishedAt, order: DESC}) {
        totalCount
        edges {
          node {
            snippet {
              id
              title
              thumbnails {
                standard {
                  local
                  {
                    childImageSharp{
                        fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                  }
                }
              }
            }
            contentDetails {
              videoId
              videoPublishedAt(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
  }
`;