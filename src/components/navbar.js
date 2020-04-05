import React, { useState } from 'react';
import { Link } from 'gatsby';
import {isWindow} from '../utils';
import logo from '../static/images/logo/factly_logo_transparent_376x100.png';

function Navbar(props) {
  // HTML Properties for each of the links in UI
  const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${isWindow && window.location.pathname === path ? 'focused' : ''}`,
    style: {
      animationDelay: `${animationDelay}s`
    }
  });
    return (
      <div
        className="Navbar"
        style={{
          animationDelay: '0.5s',
          height: typeof window !== `undefined` && window.location.pathname === '/clusters' ? '2.5rem' : '',
          transition: 'all 0.3s ease-in-out'
        }}
      >
       <Link to="/"> 
          <img
            className="fadeInUp logo"
            alt="India COVID-19 Tracker"
            src={logo}
            style={{
              animationDelay: '0.0s',
              transition: 'all 0.3s ease-in-out'
            }}
          />
        </Link>
        <div className="navbar-left">
          {props.pages.map((page, i) => (
            <Link to={page.pageLink} key={i}>
              <span
                {...navLinkProps(page.pageLink, page.animationDelayForNavbar)}
              >
                {page.displayName}
              </span>
            </Link>
          ))}
        </div>

        <div className="navbar-right"></div>
      </div>
    );
}

export default Navbar;
