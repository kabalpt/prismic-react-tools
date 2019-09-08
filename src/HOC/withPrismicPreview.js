import { get } from 'lodash';
import Prismic from '../Services/Prismic';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import camelToDash from '../helpers/camelCaseToDashCase';

const getPageComponents = (pageComponents, exceptions) =>
  Object.keys(pageComponents).reduce(
    (result, key) => ({
      ...result,
      [camelToDash(key, exceptions)]: pageComponents[key]
    }),
    {}
  );

export const withPrismicPreview = ({ pageComponents, ...options }) => {
  const pages = getPageComponents(pageComponents, options.layoutNameExceptions);

  return class WithPrismicPreview extends Component {
    static defaultProps = {
      location: {}
    };

    static propTypes = {
      location: PropTypes.shape({
        search: PropTypes.string
      })
    };

    state = {
      isLoading: true
    };

    componentDidMount() {
      this.getPreviewPage();
    }

    getPreviewPage = async () => {
      const { location } = this.props;

      const api = new Prismic(options);

      const pageContext = await api.getPreview({ location, options });

      return this.setState({ isLoading: false, pageContext });
    };

    render() {
      const { isLoading } = this.state;
      const document = get(this.state, 'pageContext.document');

      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (!document || !document.type) {
        return (
          <div>
            <h1>No data or your token has expired</h1>
            <p>Click on prismic preview icon to refresh...</p>
          </div>
        );
      }

      const Page = pages[document.type.replace(options.layoutsKey, '')];

      if (!Page) {
        return <div>No preview for &quot;{document.type}&quot;</div>;
      }

      return <Page {...this.props} {...this.state} />;
    }
  };
};
