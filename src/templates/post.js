import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'

function PostTemplate({ data: { wordpressPost: post } }) {
    return <Layout>
        <Helmet
            title={post.title}
            meta={[
            { name: 'description', content: post.excerpt },
            ]}
        />
        <div className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="row justify-content-center">   
                <div className="col col-8">
                    <article>
                        {/* <span className="cat-title">Coronavirus</span> */}
                        <div className="title">
                            <div  className="sub-title">
                            <h6><a href="/stories">Stories</a></h6>
                            {post.categories.map(function(category){
                                    return <h6>{category.name}</h6>;
                                })}
                            </div>
                            <h1>
                                <a href={`/stories/${post.slug}`} dangerouslySetInnerHTML={{__html: post.title}}></a>
                            </h1>
                        </div>
                        
                        <div className="meta-info">
                            <span className="author">By {post.author_meta.display_name}</span>
                            <span className="date"> On {post.date}</span>
                        </div>
                        <a className="image-link" href={`/stories/${post.slug}`}>
                        { post.jetpack_featured_media_url.localFile ? 
                        <Img fluid={post.jetpack_featured_media_url.localFile.childImageSharp.fluid} /> : 
                        <img src={post.jetpack_featured_media_url.source_url} />}
                        </a>
                        <div className="content" dangerouslySetInnerHTML={{ __html: post.content}} />
                    </article>
                </div>
            </div>
        </div>
    </Layout>
}

export default PostTemplate;

export const query = graphql`
  query($id: String!) {
    wordpressPost(id: {eq: $id}){
        id
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        jetpack_featured_media_url {
            source_url
            localFile{
              childImageSharp{
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
        }
        excerpt
        content
        categories{
            name
          }
        author_meta{
            display_name
        }
      }
  }
`;