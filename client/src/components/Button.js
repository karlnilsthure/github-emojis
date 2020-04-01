import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 8px;
  border-radius: 10px;
  display: inline-block;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  :hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export const Button = ({ title, onClick }) => {
  return (
    <React.Fragment>
      <StyledButton onClick={onClick}>{title}</StyledButton>
    </React.Fragment>
  );
};

Button.propTypes = {};
