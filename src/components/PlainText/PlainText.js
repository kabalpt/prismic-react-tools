import { RichText } from 'prismic-reactjs';
import { bracked } from '../../helpers/bracked';
import PropTypes from 'prop-types';
import React from 'react';
import parse from 'html-react-parser';

export const PlainText = ({ content, variables }) =>
  typeof content === 'string' ? (
    <React.Fragment>{parse(bracked(content, variables))}</React.Fragment>
  ) : (
    <React.Fragment>{parse(bracked(RichText.asText(content), variables))}</React.Fragment>
  );

PlainText.propTypes = {
  content: PropTypes.any.isRequired,
  variables: PropTypes.object
};

PlainText.defaultProps = {
  variables: {}
};
