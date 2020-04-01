import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";

const Input = styled.input`
  margin-top: 15px;
  margin-right: 10px;
`;

export const Search = ({ setEmojis, setIsFetching, setErrorMessage }) => {
  const [value, setValue] = useState("");

  const getEmojisBySearch = param => {
    setEmojis(null);
    setIsFetching(true);
    setErrorMessage(null);
    fetch(`http://localhost:4000/api/emojis/${param}`)
      .then(res => res.json())
      .then(res => {
        setIsFetching(false);
        if (res.errorMessage) {
          setErrorMessage(res.errorMessage);
          return;
        }
        setEmojis(res.emojiArray);
      });
  };

  return (
    <div>
      <h2>Search for emojis</h2>
      <h3>(one word please)</h3>
      <Input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Button title="Search" onClick={() => getEmojisBySearch(value)} />
    </div>
  );
};

Search.propTypes = {
  setEmojis: PropTypes.func,
  setIsFetching: PropTypes.func,
  setErrorMessage: PropTypes.func
};
