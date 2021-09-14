import React from "react";
import {
  EndPageContainer,
  FinishingText,
  FinishingTextCharacter,
  TryAgainButton,
  ScoreText,
} from "./styled";
import { QuestionState } from "model/QuestionState";

interface EndPageProps {
  questionStates: QuestionState[];
  onRestartClick?: () => void;
}

interface QuestionStateProps {
  questionStates: QuestionState[];
}

interface ScoreInfoProps {
  score: number;
}

const getScore = ({ questionStates }: QuestionStateProps): ScoreInfoProps => {
  const score = questionStates.filter((q) => q == QuestionState.CORRECT).length;
  return { score };
};

const Score = ({ questionStates }: QuestionStateProps): React.ReactElement => (
  <ScoreText>
    {getScore({ questionStates }).score}/{questionStates.length}
  </ScoreText>
);

export const EndPage = ({
  questionStates,
  onRestartClick,
}: EndPageProps): React.ReactElement => (
  <EndPageContainer>
    <FinishingText>
      {"Congratulations!!".split("").map((value, index) => (
        <FinishingTextCharacter index={index} key={index}>
          {value}
        </FinishingTextCharacter>
      ))}
    </FinishingText>

    <Score {...{ questionStates }} />
    <TryAgainButton onClick={onRestartClick}>Try again!</TryAgainButton>
  </EndPageContainer>
);
