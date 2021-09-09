import styled from "styled-components";
import { midGreen, darkGreen, midRed, darkRed, white } from "colours/colours";
import "fonts/fonts.css";

interface ExplanationCardProps {
  correct: boolean;
}

export const ExplanationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ExplanationCard = styled.div`
  background: ${({ correct }: ExplanationCardProps) =>
    correct ? midGreen : midRed};
  border: 2px solid
    ${({ correct }: ExplanationCardProps) => (correct ? darkGreen : darkRed)};
  color: ${white};
  padding: 16px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const MessageTextWrapper = styled.div`
  font-family: Riangriung;
  font-size: 260%;
`;

export const ExplanationTextWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
`;
