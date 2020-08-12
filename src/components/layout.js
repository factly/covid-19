import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import '../static/css/style.scss';

import Navbar from './navbar';
import Banner from './banner';

import logo from '../static/images/logo/factly-logo.png';

const pages = [
  {
    pageLink: '/',
    displayName: 'Factchecks',
    animationDelayForNavbar: 0.4
  },
  {
    pageLink: '/videos',
    displayName: 'Videos',
    animationDelayForNavbar: 0.4
  },
  {
    pageLink: '/quickcheck',
    displayName: 'Quick Check',
    animationDelayForNavbar: 0.4
  },
  {
    pageLink: '/dailydata',
    displayName: 'Daily Data',
    animationDelayForNavbar: 0.4
  },
  {
    pageLink: '/links',
    displayName: 'Helpful Links',
    animationDelayForNavbar: 0.4
  }
];

const Layout = props => (
  <StaticQuery
    query={graphql`
      query IndexPage {
        site {
          siteMetadata {
            description
            title
            lang
            author
            type
            logo
            favicon
            siteUrl
          }
        }
      }
    `}
    render={({ site }) => {
      const { siteMetadata } = site;
      const { children } = props;

      return (
        <>
          <Helmet
            title={siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: siteMetadata.description
              },
              { name: 'author', content: siteMetadata.author },
              { property: 'og:url', content: siteMetadata.siteUrl },
              {
                property: 'og:image',
                content: `${siteMetadata.siteUrl}/images/favicon.png`
              },
              { property: 'og:title', content: siteMetadata.title },
              { property: 'og:type', content: siteMetadata.type },
              {
                property: 'og:description',
                content: siteMetadata.description
              }
            ]}
            link={[{ rel: 'canonical', href: siteMetadata.siteUrl }]}
          >
            <html lang={siteMetadata.lang} />
          </Helmet>

          <div className="App">
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              {children}
            </div>
            <footer className="fadeInUp" style={{ animationDelay: '2s' }}>
              <div className="link d-flex align-items-center justify-content-center">
                <Link to="/" style={{background: "none"}}>
                  <img
                    src={logo}
                    alt="https://www.covid19india.org | Coronavirus cases live dashboard"
                  />
                </Link>
                <span className="separator"> </span>
                <a href="https://github.com/covid19india">covid19india</a>
              </div>
            </footer>
          </div>
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
