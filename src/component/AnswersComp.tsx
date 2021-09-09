import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerComp";
import styled from "styled-components";

interface AnswersCompProps {
  answers: Answer[];
}

const AnswersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
`;

export const AnswersComp = ({ answers }: AnswersCompProps) => (
  <AnswersContainer>
    {answers.map((answer) => (
      <AnswerComp answer={answer} />
    ))}
  </AnswersContainer>
);
