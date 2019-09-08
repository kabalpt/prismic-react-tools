import { PrismicReactToolsConsumer } from '../PrismicReactToolsContext/PrismicReactToolsContext';
import { RichText as PrismicRichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import React from 'react';

const renderRichText = ({ content, serializer, variables }) => {
  const richTextSerializer = serializer.bind(null, variables);

  return PrismicRichText.render(content, null, richTextSerializer);
};

export const RichText = ({ content, variables }) => (
  <PrismicReactToolsConsumer>
    {({ serializer }) => {
      return <React.Fragment>{renderRichText({ content, serializer, variables })}</React.Fragment>;
    }}
  </PrismicReactToolsConsumer>
);

RichText.propTypes = {
  content: PropTypes.any.isRequired,
  variables: PropTypes.object
};

RichText.defaultProps = {
  variables: {}
};
