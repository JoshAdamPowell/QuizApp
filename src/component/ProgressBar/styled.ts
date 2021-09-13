import styled, { Keyframes, keyframes } from "styled-components";
import { QuestionState } from "model/QuestionState";
import {
  midGrey,
  darkGrey,
  midGreen,
  darkGreen,
  midRed,
  darkRed,
} from "colours/colours";

interface ProgressDotProps {
  state: QuestionState;
}

const getBorderColor = (state: QuestionState): string => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return darkGrey;
    case QuestionState.WRONG:
      return darkRed;
    case QuestionState.CORRECT:
      return darkGreen;
  }
};

const getFillColor = (state: QuestionState): string => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return midGrey;
    case QuestionState.WRONG:
      return midRed;
    case QuestionState.CORRECT:
      return midGreen;
  }
};

const progressDotAnim = (state: QuestionState): Keyframes => keyframes`
  100%{ background-color: ${getFillColor(state)};
      border-color:  ${getBorderColor(state)};
  }`;

export const ProgressDot = styled.div`
  animation: ${({ state }: ProgressDotProps) => progressDotAnim(state)} 1s
    forwards;
  margin: 2px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid ${getBorderColor(QuestionState.UNANSWERED)};
  border-radius: 50%;
  background-color: ${getFillColor(QuestionState.UNANSWERED)};
`;

export const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
