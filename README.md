# prismic-react-tools

>

[![NPM](https://img.shields.io/npm/v/prismic-react-tools.svg)](https://www.npmjs.com/package/prismic-react-tools) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add prismic-react-tools
```

## Usage

Tools that you can use from this set:

1. Components:
  - PlainText
  - RichText
  - Slice
  - Slices

1. HOC:
  - withPrismicPreview

Just pass your components and a serializer (optional) to the provider, then you may use the components refered above:
```jsx
import React, { Component } from 'react'
import { PrismicReactToolsProvider } from 'prismic-react-tools'

// your components to be rendered as slices
import * as components from './components'

// your serializer for prismic data
import { serializer } from './lib'

class Layout extends Component {
  render () {
    return (
      <PrismicReactToolsProvider
        components={components}
        serializer={serializer}
      >
       {/* ... */}
      </PrismicReactToolsProvider>
    )
  }
}
```

## Components

1. `PlainText`
```jsx
//...
// use it with strings
<PlainText
  content="Your name is {{ name }}, and you're {% adjective %}"
  variables={{ adjective: 'cool', name: 'John Ganzas' }}
/>

// use it with single rich text from prismic (asText)
// be aware that you can pass variables here too
<PlainText content={content} />

//...
```

2. `RichText`
```jsx
//...
// use it with strings
<RichText
  content={content}
  variables={{ myVar: 'Some variable' }}
/>

//...
```

3. `Slice`
```jsx
//...
// just create your slice in prismic with the
// match name of you component
// example: in Prismic, call your slice `Item List` (Prismic will turn in `item_list`)
// and you just need to be sure you have the component `ItemList`
<Slice {...sliceObjectFromPrismic} />

// then in your component just access to all the data in the props ;)
//...
```

4. `Slices`
```jsx
//...
// just pass the array with slices and
// this will just map that array and render
// slice by slice
<Slices slices={slicesFromPrismic} />
//...
```

## HOC

1. `withPrismicPreview`

Simple simple, this will just create a preview page for you with the same strategy that is used in `gatsby-source-prismic-with-magic`
```jsx
import * as pageComponents from '../layouts';
import { withPrismicPreview } from 'prismic-react-tools';
import prismicOptions from '../../prismic-config';

export default withPrismicPreview({ pageComponents, ...prismicOptions });
```

**important note** here is to setup the options exactly as in `gatsby-source-prismic-with-magic`, that way, will be ensuring the preview will be fed by the same data as the static pages

options:
```javascript
module.exports = {
  accessToken,                    // Prismic access token
  langs,                          // language object ex: { 'en-us': { default: true, path: 'en }, 'pt-pt': { path: 'pt' } }
  layoutsKey = 'page_-_',         // layouts key that match your pages in Prismic
  layoutNameExceptions = {},      // exceptions (view more about this in `gatsby-source-prismic-with-magic`)
  layoutsPath = 'src/layouts',    // layouts path for your page components (used by `gatsby-source-prismic-with-magic`)
  onCreatePage,                   // function that runs on create each page (view `gatsby-source-prismic-with-magic` docs)
  onCreatePages,                  // function that runs on create all pages (view `gatsby-source-prismic-with-magic` docs)
  repositoryName                  // Prismic repository name
}
```

## Nice to know

This set of tools can be really usefull with my [Gatsby Prismic fetch plugin](https://github.com/kabalpt/gatsby-source-prismic-with-magic)

## License

MIT © [psoaresbj](https://github.com/psoaresbj)
