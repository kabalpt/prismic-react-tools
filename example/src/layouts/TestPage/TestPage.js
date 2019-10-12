import { PlainText } from 'prismic-react-tools';
import PropTypes from 'prop-types';
import React from 'react';

const TestPage = ({ pageContext }) => {
  const { document } = pageContext;
  const {
    data: { heading }
  } = document;

  return (
    <>
      <PlainText content={heading} />
    </>
  );
};

TestPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default TestPage;
