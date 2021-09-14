import React from "react";
import { getScore, Score } from "component/Score/Score";
import {
  EndPageContainer,
  FinishingText,
  FinishingTextCharacter,
  TryAgainButton,
} from "./styled";
import { QuestionState } from "model/QuestionState";

interface EndPageProps {
  questionStates: QuestionState[];
  onRestartClick?: () => void;
}

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

    <Score {...getScore({ questionStates })} />
    <TryAgainButton onClick={onRestartClick}>Try again!</TryAgainButton>
  </EndPageContainer>
);
