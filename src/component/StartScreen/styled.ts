import styled from "styled-components";
import "fonts/fonts.css";
import { darkNavy, darkYellow, midNavy, white } from "colours/colours";

export const QuizTitle = styled.div`
  color: ${darkYellow};
  font-family: Riangriung;
  font-size: 550%;
  -webkit-text-stroke: 2px black;
  text-align: center;
`;

export const StartScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin: 100px;
`;

export const StartButton = styled.button`
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
