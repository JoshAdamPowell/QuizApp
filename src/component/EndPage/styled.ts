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
  justify-content: space-evenly;
  flex-direction: column;
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
  font-family: "Riangriung";
  font-size: 150%;
  color: ${({ index }: IndexProps) => getTextColour(index)};
`;
