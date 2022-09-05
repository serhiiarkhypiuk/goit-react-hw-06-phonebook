import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ btnText }) => {
  return <StyledButton type="submit">{btnText}</StyledButton>;
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default Button;
