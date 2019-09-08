import { PrismicReactToolsConsumer } from '../PrismicReactToolsContext/PrismicReactToolsContext';
import PropTypes from 'prop-types';
import React from 'react';
import snakeCaseToComponentCase from '../../helpers/snakeCaseToComponentCase';

export const Slice = ({ items, primary, sliceType }) => (
  <PrismicReactToolsConsumer>
    {({ components }) => {
      const Component = components[snakeCaseToComponentCase(sliceType)];

      if (!Component) {
        return null;
      }

      return <Component {...primary} items={items} />;
    }}
  </PrismicReactToolsConsumer>
);

Slice.propTypes = {
  items: PropTypes.array,
  primary: PropTypes.object,
  sliceType: PropTypes.string.isRequired
};

Slice.defaultProps = {
  items: null,
  primary: null
};
