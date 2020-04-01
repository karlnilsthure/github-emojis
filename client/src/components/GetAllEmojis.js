import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import styled from "styled-components";

const StyledHeading = styled.h2`
  margin-bottom: 15px;
`;

export const GetAllEmojis = ({ setEmojis, setIsFetching, setErrorMessage }) => {
  const getAllEmojis = () => {
    setEmojis(null);
    setIsFetching(true);
    setErrorMessage(null);
    fetch("http://localhost:4000/api/emojis")
      .then(res => res.json())
      .then(res => {
        setEmojis(res.emojiArray);
        setIsFetching(false);
      });
  };
  return (
    <div>
      <StyledHeading>Get all emojis</StyledHeading>
      <Button title="Get all" onClick={() => getAllEmojis()} />
    </div>
  );
};

GetAllEmojis.propTypes = {
  setEmojis: PropTypes.func,
  setIsFetching: PropTypes.func,
  setErrorMessage: PropTypes.func
};
