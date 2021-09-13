import React, { useCallback, useContext } from "react";
import { Answer } from "model/Answer";
import { QuizDataContext } from "view/QuizView";
import styled from "styled-components";
import "css/fonts.css";
import {
  AnswerButton,
  AnswerContentContainer,
  AnswerContentItem,
  AnswerTextWrapper,
  StyledImg,
} from "./styled";

interface AnswerCompProps {
  answer: Answer;
  index: number;
}

export const AnswerComp = ({ answer, index }: AnswerCompProps) => {
  const { selectedQuestions, setSelectedQuestions } =
    useContext(QuizDataContext);

  const onClick = useCallback(() => {
    const questions = [...selectedQuestions];
    questions[index] = !questions[index];
    setSelectedQuestions(questions);
  }, [selectedQuestions]);

  return (
    <AnswerButton onClick={onClick}>
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
};
