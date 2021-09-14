import { QuestionState } from "model/QuestionState";
import React from "react";
import { ScoreText } from "./styled";

export interface QuestionStateProps {
  questionStates: QuestionState[];
}

export interface ScoreInfoProps {
  score: number;
  totalQuestions: number;
}

export const getScore = ({
  questionStates,
}: QuestionStateProps): ScoreInfoProps => {
  let score = 0;
  const totalQuestions = questionStates.length;
  for (let i = 0; i < questionStates.length; i++) {
    if (questionStates[i] == QuestionState.CORRECT) {
      score += 1;
    }
  }
  const scoreInfo: ScoreInfoProps = { score, totalQuestions };
  return scoreInfo;
};

export const Score = ({
  score,
  totalQuestions,
}: ScoreInfoProps): React.ReactElement => (
  <ScoreText>
    {score}/ {totalQuestions}
  </ScoreText>
);
