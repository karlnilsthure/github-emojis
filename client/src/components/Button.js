import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  background: #000000;
  padding: 8px;
  border-radius: 10px;
  display: inline-block;
  border: none;
  cursor: pointer;
`;

export const Button = ({ title, onClick }) => {
  return (
    <React.Fragment>
      <StyledButton onClick={onClick}>{title}</StyledButton>
    </React.Fragment>
  );
};

Button.propTypes = { title: PropTypes.string, onClick: PropTypes.func };
