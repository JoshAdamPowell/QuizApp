import React from "react";
import { Question } from "model/Question";
import { AnswersComp } from "component/AnswersComp";
import styled from "styled-components";
import "css/fonts.css";

interface MultiChoiceQProps {
  question: Question;
}

const MultiChoiceQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledQuestionImg = styled.img`
  max-height: 300px;
`;

const QuestionContainer = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 150%;
`;

export const MultiChoiceQComp = ({
  question,
}: MultiChoiceQProps): React.ReactElement => (
  <MultiChoiceQContainer>
    {question.image && <StyledQuestionImg src={question.image} />}
    <QuestionContainer>{question.text}</QuestionContainer>
    <AnswersComp answers={question.answers} />
  </MultiChoiceQContainer>
);
