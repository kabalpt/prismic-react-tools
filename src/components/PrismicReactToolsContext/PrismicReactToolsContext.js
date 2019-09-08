import { serializer as defaultSerializer } from '../../lib/serializer';
import PropTypes from 'prop-types';
import React from 'react';

const PrismicReactToolsContext = React.createContext({});

export const PrismicReactToolsProvider = ({ children, components, serializer }) => (
  <PrismicReactToolsContext.Provider value={{ components, serializer: serializer ? serializer : defaultSerializer }}>
    {children}
  </PrismicReactToolsContext.Provider>
);

PrismicReactToolsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  components: PropTypes.object,
  serializer: PropTypes.func
};

PrismicReactToolsProvider.defaultProps = {
  components: [],
  serializer: null
};

export const PrismicReactToolsConsumer = PrismicReactToolsContext.Consumer;
