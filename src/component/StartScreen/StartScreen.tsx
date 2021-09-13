import React from "react";
import { QuizTitle, StartButton, StartScreenContainer } from "./styled";

interface StartScreenProps {
  quizName: string;
  onStartClick?: () => void;
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
