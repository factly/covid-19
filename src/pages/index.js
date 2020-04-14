import React, {useState, useEffect, useRef} from 'react';
import Img  from 'gatsby-image';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby'
import InfiniteScroll from 'react-infinite-scroller';

function Index ({ data }) {
    const [items, setItems] = useState(data.allWordpressPost.edges.slice(0, 6));
    const [hasNextPage, setHasNextPage] = useState(true);

    const handleLoadMore = () => {
        if(!hasNextPage) return false;
        const nextPageItems = data.allWordpressPost.edges.slice(items.length, items.length + 6);
        setItems([...items, ...nextPageItems]);
        setHasNextPage((items.length < data.allWordpressPost.edges.length));
    }

    // useEffect(() => {
    //     window.onscroll = debounce(() => {
    //         if (window.innerHeight + document.documentElement.scrollTop >= (document.documentElement.offsetHeight - 200)) {
    //         console.log(hasNextPage, items)
    //             handleLoadMore();
    //         } 
    //       }, 100);
    // }, [])
    
    return <Layout>
        <InfiniteScroll
                    pageStart={0}
                    loadMore={handleLoadMore}
                    hasMore={hasNextPage}
                >
        <div className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="row">
                    {items.map(post => <div key={post.node.wordpress_id} className="col col-6">
                        <article>
                            {post.node.categories.length > 0 && <span className="cat-title">{post.node.categories[0].name}</span>}
                            <Link className="image-link" to={`/factcheck/${post.node.slug}`}>
                                <Img fluid={post.node.jetpack_featured_media_url.localFile.childImageSharp.fluid} alt={post.node.title} />
                            </Link>
                            <div className="title">
                                <h2>
                                    <Link to={`/factcheck/${post.node.slug}`} dangerouslySetInnerHTML={{__html: `${post.node.title}`}}></Link>
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
        </InfiniteScroll>
    </Layout>
}

export default Index;

export const query = graphql`
  query {
    allWordpressPost(sort: {fields: date,order:DESC}, filter: {categories: { elemMatch: {wordpress_id: {eq: 358}}}}) {
        totalCount
        edges {
          node {
            wordpress_id
            excerpt
            title
            slug
            jetpack_featured_media_url {
                featured_img
                localFile{
                  childImageSharp{
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
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