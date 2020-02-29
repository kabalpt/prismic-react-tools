import { RichText } from 'prismic-react-tools';
import PropTypes from 'prop-types';
import React from 'react';

const Homepage = props => {
  const { pageContext } = props;
  const { heading } = pageContext.document.data;

  return <RichText content={heading} />;
};

Homepage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default Homepage;
