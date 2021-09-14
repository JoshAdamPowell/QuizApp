import styled from "styled-components";
import "fonts/fonts.css";
import {
  darkNavy,
  midBlue,
  midGreen,
  midNavy,
  midOrange,
  midPurple,
  midRed,
  white,
} from "colours/colours";

export const EndPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
  text-align: center;
  align-items: center;
`;

interface IndexProps {
  index: number;
}

const getTextColour = (index: number): string => {
  const colours = [midRed, midOrange, midBlue, midNavy, midPurple, midGreen];
  return colours[index % colours.length];
};

export const FinishingTextCharacter = styled.span`
  color: ${({ index }: IndexProps) => getTextColour(index)};
`;

export const FinishingText = styled.div`
  font-family: "Riangriung";
  font-size: 550%;
`;

export const TryAgainButton = styled.div`
    background: ${midNavy};
    border 2px solid ${darkNavy};
    color: ${white};
    padding: 16px;
    border-radius: 10px;
    width: 100px;
    cursor: pointer;

    font-family: Roboto;
    font-size: 120%;

    &:hover {
        background: ${darkNavy};
    }
`;

export const ScoreText = styled.div`
  font-family: "Luckiest Guy", cursive;
  font-size: 300%;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
