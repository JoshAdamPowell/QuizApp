import styled from "styled-components";
import "fonts/fonts.css";
import {
  midBlue,
  midGreen,
  midNavy,
  midOrange,
  midPurple,
  midRed,
} from "colours/colours";

export const EndPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
  text-align: center;
`;

interface IndexProps {
  index: number;
}

const getTextColour = (index: number) => {
  const colours = [midRed, midOrange, midBlue, midNavy, midPurple, midGreen];
  return colours[index % colours.length];
};

export const FinishingTextCharacter = styled.span`
  color: ${({ index }: IndexProps) => getTextColour(index)};
`;

export const FinishingText = styled.div`
  font-family: "Riangriung";
  font-size: 135%;
`;
