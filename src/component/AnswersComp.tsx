import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerComp";

interface AnswersCompProps {
  answers: Answer[];
}

export const AnswersComp = ({ answers }: AnswersCompProps) => (
  <div>
    {answers.map((answer) => (
      <AnswerComp answer={answer} />
    ))}
  </div>
);
