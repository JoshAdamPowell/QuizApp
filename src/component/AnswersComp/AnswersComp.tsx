import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerComp/AnswerComp";
import { AnswersContainer } from "./styled";

interface AnswersCompProps {
  answers: Answer[];
}

export const AnswersComp = ({ answers }: AnswersCompProps) => (
  <AnswersContainer>
    {answers.map((answer) => (
      <AnswerComp answer={answer} />
    ))}
  </AnswersContainer>
);
