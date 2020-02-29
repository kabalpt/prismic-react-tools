import * as components from '../../components';
import { PlainText, PrismicReactToolsProvider, RichText, Slices } from 'prismic-react-tools';
import PropTypes from 'prop-types';
import React from 'react';

const About = ({ pageContext }) => {
  const { document } = pageContext;
  const {
    data: { body: slices, content, title }
  } = document;

  return (
    <>
      <h1>About</h1>
      <PrismicReactToolsProvider components={components}>
        <RichText content={content} variables={{ amazing: 'wonderful!' }} />
        <PlainText content={title} variables={{ title: 'Title!!!!' }} />
        <PlainText content="some {% amazing %} string" variables={{ amazing: 'wonderful!' }} />
        <Slices slices={slices} />
      </PrismicReactToolsProvider>
    </>
  );
};

About.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default About;
