import React from "react";
import { Answer } from "model/Answer";
import styled from "styled-components";
import "css/fonts.css";

interface AnswerContentProps {
  answer: Answer;
}

const AnswerContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AnswerContentItem = styled.div`
  width: 50%;
`;

const AnswerTextWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const StyledImg = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const AnswerContent = ({ answer }: AnswerContentProps) => {
  return answer.text && answer.image ? (
    <AnswerContentContainer>
      <AnswerContentItem>
        <AnswerTextWrapper>{answer.text}</AnswerTextWrapper>
      </AnswerContentItem>
      <AnswerContentItem>
        <StyledImg src={answer.image} />
      </AnswerContentItem>
    </AnswerContentContainer>
  ) : (
    <div>
      {answer.text ? (
        <AnswerTextWrapper>{answer.text}</AnswerTextWrapper>
      ) : (
        <StyledImg src={answer.image} />
      )}
    </div>
  );
};

interface AnswerCompProps {
  answer: Answer;
}

const AnswerButton = styled.button`
  background: #41bcec;
  border: 2px solid #259bbf;
  color: white;
  padding: 16px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

export const AnswerComp = ({ answer }: AnswerCompProps) => (
  <AnswerButton>
    <AnswerContent answer={answer} />
  </AnswerButton>
);
