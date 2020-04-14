import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby'

function PostTemplate({ data: { wordpressPost: post, site: {siteMetadata} } }) {
    const schemaArticle = {
        '@context': 'http://schema.org',
        '@type': 'Article',
        author: {
          '@type': 'Person',
          name: post.author_meta.display_name,
        },
        copyrightHolder: {
          '@type': 'Person',
          name: post.author_meta.display_name,
        },
        copyrightYear: '2020',
        creator: {
          '@type': 'Person',
          name: post.author_meta.display_name,
        },
        publisher: {
          '@type': 'Organization',
          name: 'factly',
          logo: {
            '@type': 'ImageObject',
            url: `${siteMetadata.siteUrl}/images/favicon.png`,
          },
        },
        datePublished: post.date,
        description: post.excerpt,
        headline: post.title,
        inLanguage: 'telugu',
        url: siteMetadata.siteUrl,
        name: post.title,
        image: {
          '@type': 'ImageObject',
          url: post.jetpack_featured_media_url.featured_img,
        },
        mainEntityOfPage: siteMetadata.siteUrl,
      }
    return <Layout>
        <Helmet>
            <title>{post.title}</title>
            <meta name="description" content={post.excerpt} />
            <meta name="image" content={post.jetpack_featured_media_url.featured_img} />
            <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
        </Helmet>
        <div className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="row justify-content-center">   
                <div className="col col-8">
                    <article>
                        {/* <span className="cat-title">Coronavirus</span> */}
                        <div className="title">
                            <div  className="sub-title">
                            <h6><Link to="/stories">Stories</Link></h6>
                            {post.categories.map(function(category){
                                    return <h6>{category.name}</h6>;
                                })}
                            </div>
                            <h1>
                                <Link to={`/factcheck/${post.slug}`} dangerouslySetInnerHTML={{__html: post.title}}></Link>
                            </h1>
                        </div>
                        
                        <div className="meta-info">
                            <span className="author">By {post.author_meta.display_name}</span>
                            <span className="date"> On {post.date}</span>
                        </div>
{/* //                         <Link className="image-link" to={`factcheck${post.slug}`}>
//                         { post.jetpack_featured_media_url.localFile ? 
//                         <Img fluid={post.jetpack_featured_media_url.localFile.childImageSharp.fluid} /> : 
//                         <img src={post.jetpack_featured_media_url.source_url} />}
//                         </Link> */}
                        <div className="content" dangerouslySetInnerHTML={{ __html: post.content}} />
                        <div className="content"><p><i>Originally published at </i><u><a href={post.link}>Factly</a></u></p></div>
                    </article>
                </div>
            </div>
        </div>
    </Layout>
}

export default PostTemplate;

export const query = graphql`
  query($id: String!) {
    site {
        siteMetadata {
          description
          title
          author
          type
          logo
          favicon
          siteUrl
        }
      }
    wordpressPost(id: {eq: $id}){
        id
        link
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        jetpack_featured_media_url {
            featured_img
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