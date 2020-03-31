import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const PageNotFound = ({ data }) => (
  <Layout>
    <div className="page-not-found">
      <h1>Page Not Found</h1>
    </div>
  </Layout>
);

PageNotFound.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default PageNotFound;

