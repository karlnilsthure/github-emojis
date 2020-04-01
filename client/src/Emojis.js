import React, { useState } from "react";
import styled from "styled-components";
import "./Emojis.css";
import { Card } from "./components/Card";
import { Search } from "./components/Search";
import { ErrorMessage } from "./components/ErrorMessage";
import { GetAllEmojis } from "./components/GetAllEmojis";

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  padding: 20px;
`;

const CTA = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

const Emojis = () => {
  const [emojis, setEmojis] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <Wrapper className="emojis">
      <Title>Github emojis</Title>

      <CTA>
        <GetAllEmojis
          setEmojis={setEmojis}
          setIsFetching={setIsFetching}
          setErrorMessage={setErrorMessage}
        />
        <Search
          setEmojis={setEmojis}
          setIsFetching={setIsFetching}
          setErrorMessage={setErrorMessage}
        />
      </CTA>

      {emojis && (
        <CardContainer>
          {emojis.map((emoji, index) => {
            return <Card key={index} {...emoji} />;
          })}
        </CardContainer>
      )}
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          onClickCallback={() => setErrorMessage(null)}
        />
      )}
      {isFetching && <span>loading..</span>}
    </Wrapper>
  );
};

export default Emojis;
