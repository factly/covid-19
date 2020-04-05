import React, {useState, useEffect} from 'react';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import axios from 'axios';
import { Link, graphql, StaticQuery } from 'gatsby';
import { isWindow } from '../utils';

const Banner = () => (
    <StaticQuery
    query={graphql`
      query Banner {
        allWordpressPost(sort: {fields: date,order:DESC}, filter: {jetpack_featured_media_url: {source_url:{ne: null}}, categories: { elemMatch: {wordpress_id: {eq: 358}}}}, limit: 10) {
          totalCount
          edges {
            node {
              wordpress_id
              title
              slug
            }
          }
        }
      }
    `}
    render={({allWordpressPost, start, date}) => {
      const [snippets, setSnippets] = useState(allWordpressPost.edges);
      const [snippet, setSnippet] = useState();
      const startStateLocalValue = isWindow ? localStorage.getItem('startState') : null;
      const [startState] = useState(
        start
          ? new Date(date)
          : startStateLocalValue === 'null'
          ? new Date()
          : new Date(startStateLocalValue)
      );
      const [difference, setDifference] = useState(
        new Date(differenceInMilliseconds(new Date(), startState))
          .toISOString()
          .slice(11, 19)
      );

      useEffect(() => {
        if (snippets.length > 1) {
          setSnippet(snippets[0]);
        }
      }, [snippets]);

      useEffect(() => {
        const interval = setInterval(() => {
          setDifference(
            new Date(differenceInMilliseconds(new Date(), startState))
              .toISOString()
              .slice(11, 19)
          );
        }, 10000);
        snippetChooser(0, snippets.length - 1);
        return () => clearInterval(interval);
      }, [difference]);

      const snippetChooser = (min, max) => {
        const index = Math.random() * (max - min) + min;
        setSnippet(snippets[Math.floor(index)]);
      };
      return (
        <div
          className="Banner fadeInUp"
          style={{animationDelay: '0.2s'}}
        >
        {snippet && <div className="snippet"><Link to={`/factcheck/${snippet.node.slug}`} dangerouslySetInnerHTML={{__html: snippet.node.title}}></Link></div>}
        </div>
      )
    }}
    ></StaticQuery>
  );

export default Banner;
