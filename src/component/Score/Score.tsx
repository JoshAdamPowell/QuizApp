import { QuestionState } from "model/QuestionState";
import React from "react";

export interface QuestionStateProps {
  questionStates: QuestionState[];
}

export const Score = ({ questionStates }: QuestionStateProps) => {
  let score = 0;
  for (let i = 0; i < questionStates.length; i++) {
    if (questionStates[i] == QuestionState.CORRECT) {
      score += 1;
    }
  }
  return score;
};
