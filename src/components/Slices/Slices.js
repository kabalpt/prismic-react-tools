import { Slice } from '../Slice/Slice';
import PropTypes from 'prop-types';
import React from 'react';

export const Slices = ({ slices }) =>
  slices.length ? slices.map((slice, index) => <Slice key={index} {...slice} />) : null;

Slices.propTypes = {
  slices: PropTypes.array.isRequired
};
