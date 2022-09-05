import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

const Title = ({ headerTitle }) => {
  return <StyledTitle>{headerTitle}</StyledTitle>;
};

Title.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
export default Title;
