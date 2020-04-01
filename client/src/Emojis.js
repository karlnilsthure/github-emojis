import React, { useEffect, useState } from "react";
import "./Emojis.css";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Search } from "./components/Search";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
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

const RandomWrapper = styled.div``;

function App() {
  const [emojis, setEmojis] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/emojis")
  //     .then(res => res.json())
  //     .then(res => setEmojis(res.data));
  // }, []);

  const getAllEmojis = () => {
    setIsFetching(true);
    fetch("http://localhost:4000/api/emojis")
      .then(res => res.json())
      .then(res => {
        setEmojis(res.data);
        setIsFetching(false);
      });
  };

  return (
    <Wrapper className="emojis">
      <Title>Github emojis</Title>

      <CTA>
        <RandomWrapper>
          <h2>Get all emojis</h2>
          <Button title="Get all" onClick={() => getAllEmojis()} />
        </RandomWrapper>
        <Search />
      </CTA>

      {emojis && (
        <CardContainer>
          {Object.keys(emojis).map((emojiKey, index) => {
            return (
              <Card key={index} title={emojiKey} emoji={emojis[emojiKey]} />
            );
          })}
        </CardContainer>
      )}
      {isFetching && <span>loading..</span>}
    </Wrapper>
  );
}

export default App;
