import { QuestionState } from "model/QuestionState";
import React, { useEffect } from "react";
import { getScore, QuestionStateProps, Score } from "component/Score/Score";
import {
  EndPageContainer,
  FinishingText,
  FinishingTextCharacter,
  TryAgainButton,
} from "./styled";

export const EndPage = ({ questionStates }: QuestionStateProps) => (
  <EndPageContainer>
    <FinishingText>
      {"Congratulations!!".split("").map((value, index) => (
        <FinishingTextCharacter index={index}>{value}</FinishingTextCharacter>
      ))}
    </FinishingText>

    <Score {...getScore({ questionStates })} />
    <TryAgainButton>Try again!</TryAgainButton>
  </EndPageContainer>
);
