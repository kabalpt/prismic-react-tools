import PropTypes from 'prop-types';
import React from 'react';

export const Layout = props => {
  return <div>{props.children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
