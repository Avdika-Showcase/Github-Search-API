import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Ul, A } from '../Styles/NavbarStyle';

function Navbar({ icon, title, location }) {
  return (
    <Nav>
      <h2><i className={icon}></i> {title}</h2>
      <Ul>
        <li>
          <A exact to="/" activeClassName="selected">Home</A>
        </li>
        <li>
          <A to="/About" activeClassName="selected">About</A>
        </li>
      </Ul>
    </Nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Repository Search',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;
