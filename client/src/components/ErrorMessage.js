import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";

const StyledHeading = styled.h2`
  margin-bottom: 15px;
`;

export const ErrorMessage = ({ message, onClickCallback }) => {
  return (
    <div>
      <StyledHeading>{message}</StyledHeading>
      <Button onClick={onClickCallback} title={"Got it!"} />
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onClickCallback: PropTypes.func
};
