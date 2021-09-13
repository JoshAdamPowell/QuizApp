import styled from "styled-components";
import "fonts/fonts.css";
import {
  darkBlue,
  darkGreen,
  darkPurple,
  darkRed,
  midBlue,
  midGreen,
  midPurple,
  midRed,
  white,
} from "colours/colours";

export const AnswerContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
`;

export const AnswerContentItem = styled.div`
  width: 50%;
`;

export const AnswerTextWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
`;

export const StyledImg = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const getFillColor = ({
  selected,
  correct,
  revealed,
}: AnswerButtonProps): string => {
  if (revealed) {
    return correct ? midGreen : midRed;
  } else {
    return selected ? midPurple : midBlue;
  }
};

const getBorderColor = ({
  selected,
  correct,
  revealed,
}: AnswerButtonProps): string => {
  if (selected) {
    return darkPurple;
  } else {
    if (revealed) {
      return correct ? darkGreen : darkRed;
    } else {
      return darkBlue;
    }
  }
};

export interface AnswerButtonProps {
  selected: boolean;
  correct: boolean;
  revealed: boolean;
}

export const AnswerButton = styled.button`
  background: ${(props: AnswerButtonProps) => getFillColor(props)};
  border: 4px solid ${(props: AnswerButtonProps) => getBorderColor(props)}};
  color: ${white};
  padding: 16px;
  border-radius: 10px;
  height: 100%;
  width: 100%;

  ${(props: AnswerButtonProps) =>
    props.revealed
      ? ""
      : `cursor: pointer;
    &:hover { background: ${props.selected ? darkPurple : darkBlue};}`}
`;
