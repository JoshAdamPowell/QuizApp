import React from "react";
import { Answer } from "model/Answer";
import {
  AnswerButton,
  AnswerContentContainer,
  AnswerContentItem,
  AnswerTextWrapper,
  StyledImg,
} from "./styled";

interface AnswerContentProps {
  answer: Answer;
}

const AnswerContent = ({ answer }: AnswerContentProps): React.ReactElement =>
  answer.text && answer.image ? (
    <AnswerContentContainer>
      <AnswerContentItem>
        <AnswerTextWrapper>{answer.text}</AnswerTextWrapper>
      </AnswerContentItem>
      <AnswerContentItem>
        <StyledImg src={answer.image} />
      </AnswerContentItem>
    </AnswerContentContainer>
  ) : (
    <AnswerContentContainer>
      {answer.text ? (
        <AnswerTextWrapper>{answer.text}</AnswerTextWrapper>
      ) : (
        <StyledImg src={answer.image} />
      )}
    </AnswerContentContainer>
  );

interface AnswerCompProps {
  answer: Answer;
}

export const AnswerComp = ({ answer }: AnswerCompProps): React.ReactElement => (
  <AnswerButton selected={false} correct={answer.correct} revealed={true}>
    <AnswerContent answer={answer} />
  </AnswerButton>
);
