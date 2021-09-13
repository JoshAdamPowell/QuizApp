import { QuestionState } from "model/QuestionState";
import React, { useEffect } from "react";
import { QuestionStateProps, Score } from "component/Score/Score";
import {
  EndPageContainer,
  FinishingText,
  FinishingTextCharacter,
} from "./styled";

export const EndPage = ({ questionStates }: QuestionStateProps) => (
  <EndPageContainer>
    <FinishingText>
      {"Congratulations!!".split("").map((value, index) => (
        <FinishingTextCharacter index={index}>{value}</FinishingTextCharacter>
      ))}
    </FinishingText>

    <div>{Score({ questionStates })}</div>
    <button>Try again!</button>
  </EndPageContainer>
);
