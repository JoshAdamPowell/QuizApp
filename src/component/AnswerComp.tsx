import React from "react";
import { Answer } from "model/Answer";

interface AnswerCompProps {
  answer: Answer;
}

export const AnswerComp = ({ answer }: AnswerCompProps) => (
  <div>{answer.text ? answer.text : "image placeholder"}</div>
);
