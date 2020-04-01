import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";

const Input = styled.input`
  margin-right: 10px;
`;

export const Search = () => {
  return (
    <div>
      <h2>Search for emojis</h2>
      <Input type="text" />
      <Button title="Search" onClick={() => console.log("Search")} />
    </div>
  );
};

// Button.propTypes = {};
