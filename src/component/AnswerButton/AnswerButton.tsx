import React, { useCallback, useContext } from "react";
import { Answer } from "model/Answer";
import { QuizDataContext } from "view/QuizView";
import styled from "styled-components";
import "fonts/fonts.css";
import {
  AnswerButton,
  AnswerContentContainer,
  AnswerContentItem,
  AnswerTextWrapper,
  StyledImg
} from "./styled";
import { QuestionState } from "model/QuestionState";

interface AnswerCompProps {
  answer: Answer;
  index: number;
}

export const AnswerComp = ({
  answer,
  index,
}: AnswerCompProps): React.ReactElement => {
  const { selectedAnswers, setSelectedAnswers, questionState } =
    useContext(QuizDataContext);

  const onClick = useCallback(() => {
    const selections = [...selectedAnswers];
    selections[index] = !selections[index];
    setSelectedAnswers(selections);
  }, [selectedAnswers]);

  const revealed =
    (selectedAnswers[index] || answer.correct) &&
    questionState !== QuestionState.UNANSWERED;

  return (
    <AnswerButton
      revealed={revealed}
      correct={answer.correct}
      selected={selectedAnswers[index]}
      onClick={onClick}
    >
      {answer.text && answer.image ? (
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
      )}
    </AnswerButton>
  );
<<<<<<< HEAD
};
=======

interface AnswerCompProps {
  answer: Answer;
  index: number;
}

export const AnswerComp = ({
  answer,
  index
}: AnswerCompProps): React.ReactElement => (
  <AnswerButton
    selected={false}
    correct={answer.correct}
    revealed={false}
    index={index}
  >
    <AnswerContent answer={answer} />
  </AnswerButton>
);
>>>>>>> Shuffle answers and order of appearance
