import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby'

function PostTemplate({ data: { items: video } }) {
    const descriptionIndex = video.snippet.description.indexOf('For the detailed story');
    return <Layout>
        <Helmet
            title={video.title}
            meta={[
            { name: 'description', content: video.title },
            {
                property: 'og:image',
                content: video.snippet.thumbnails.standard.url
              }
            ]}
        />
        <div className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="row justify-content-center">   
                <div className="col col-8">
                    <article>
                        <div className="title">
                            <div  className="sub-title">
                             <h6><Link to="/videos">Go Back</Link></h6>
                            </div>
                        </div>
                        {/* <span className="cat-title">Coronavirus</span> */}
                        <div className="content">
                            <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="title">
                            <h1>
                                <Link to={`/videos/${video.contentDetails.videoId}`} dangerouslySetInnerHTML={{__html: video.snippet.title}}></Link>
                            </h1>
                        </div>
                        
                        <div className="meta-info">
                            <span className="author">By <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`}><u>{video.snippet.channelTitle}</u></a></span>
                            <span className="date"> On {video.contentDetails.videoPublishedAt}</span>
                        </div>
                        <div className="content">
                            <p>{video.snippet.description.substring(0, descriptionIndex)} </p>
                            <p><i>Originally published at </i><u><a href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}>Factly youtube channel</a></u></p>
                            
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </Layout>
}

export default PostTemplate;

export const query = graphql`
  query($id: String!) {
    items(contentDetails: {videoId: {eq: $id}}){
        id
        snippet{
          title
          channelId
          channelTitle
          description
          thumbnails{
            standard{
              url
            }
          }
        }
        contentDetails{
          videoId
          videoPublishedAt(formatString: "MMMM Do, YYYY")
        }
        
      }
  }
`;