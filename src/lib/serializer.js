import { bracked } from '../helpers/bracked';
import React from 'react';
import parse from 'html-react-parser';

/* eslint-disable-next-line max-params */
export const serializer = (variables, type, element, children, content, key) => {
  const { data, text } = element;

  if (type !== 'span' && type !== 'hyperlink') {
    return null;
  }

  if (type === 'span') {
    return parse(bracked(text, variables));
  }

  const { url } = data;

  return (
    <a className="text-link" href={url} key={key} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};
