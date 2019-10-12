import { PlainText, extractFromCamelCase } from 'prismic-react-tools';
import PropTypes from 'prop-types';
import React from 'react';

const BadejoPage = ({ pageContext }) => {
  const { document } = pageContext;
  const { data } = document;
  const { heading } = extractFromCamelCase(data, 'badejo');

  return (
    <>
      <PlainText content={heading} />
    </>
  );
};

BadejoPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default BadejoPage;
