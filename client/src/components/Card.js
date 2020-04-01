import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 150px;
  margin: 0 20px 30px 20px;
`;

const TextContainer = styled.div`
  padding: 10px 16px;
`;

const Emoji = styled.img`
  padding-top: 16px;
`;

export const Card = ({ title, emojiUrl }) => {
  return (
    <CardWrapper>
      <Emoji src={emojiUrl} />
      <TextContainer>
        <h4>{title}</h4>
      </TextContainer>
    </CardWrapper>
  );
};

Card.propTypes = { title: PropTypes.string, emojiUrl: PropTypes.string };
