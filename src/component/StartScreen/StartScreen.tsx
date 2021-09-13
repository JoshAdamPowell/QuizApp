import React from "react";
import { QuizTitle, StartButton, StartScreenContainer } from "./styled";

interface StartScreenProps {
  quizName: string;
  onStart?: () => void;
}

export const StartScreen = ({ quizName, onStart }: StartScreenProps) => (
  <StartScreenContainer>
    <QuizTitle>{quizName}</QuizTitle>
    <StartButton onClick={onStart}>Start!</StartButton>
  </StartScreenContainer>
);
