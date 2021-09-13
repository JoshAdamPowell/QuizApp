import React from "react";
import { QuizTitle, StartButton, StartScreenContainer } from "./styled";

interface StartScreenProps {
  quizName: string;
  onStartClick?: React.MouseEventHandler;
}

export const StartScreen = ({
  quizName,
  onStartClick,
}: StartScreenProps): React.ReactElement => (
  <StartScreenContainer>
    <QuizTitle>{quizName}</QuizTitle>
    <StartButton onClick={onStartClick}>Start!</StartButton>
  </StartScreenContainer>
);
