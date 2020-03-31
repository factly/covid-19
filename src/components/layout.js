import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import * as Icon from 'react-feather';

import '../static/css/style.scss';

import Navbar from './navbar';
import Banner from './banner';

import logo from '../static/images/logo/factly_logo_transparent_376x100.png';

const pages = [
  {
    pageLink: '/',
    displayName: 'Home',
    animationDelayForNavbar: 0.2
  },
  {
    pageLink: '/clusters',
    displayName: 'Clusters',
    animationDelayForNavbar: 0.3
  },
  {
    pageLink: '/links',
    displayName: 'Helpful Links',
    animationDelayForNavbar: 0.4
  },
  {
    pageLink: '/faq',
    displayName: 'FAQ',
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
              <img
                src={logo}
                alt="https://www.covid19india.org | Coronavirus cases live dashboard"
              />
              <h5>We stand with everyone fighting on the frontlines</h5>
              <div className="link">
                <a href="https://github.com/covid19india">covid19india</a>
              </div>
              <div id="footerButtons">
                <a
                  className="button"
                  href="https://bit.ly/patientdb"
                  target="_noblank"
                >
                  <Icon.Database />
                  <span>Crowdsourced Patient Database&nbsp;</span>
                </a>
                <a
                  href="https://bit.ly/covid19crowd"
                  className="button telegram"
                  target="_noblank"
                >
                  <Icon.MessageCircle />
                  <span>Join Telegram to Collaborate!</span>
                </a>
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
