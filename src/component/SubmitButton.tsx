import React from "react";
import styled from "styled-components";

import { white, midNavy, darkNavy } from "colours/colours";
const StyledButton = styled.div`
  background: ${midNavy};
  border: 2px solid ${darkNavy};
  color: ${white};
  display: flex;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    background: ${darkNavy};
  }
`;

interface SubmitButtonProps {
  isContinue: boolean;
}

export const SubmitButton = ({
  isContinue,
}: SubmitButtonProps): React.ReactElement => {
  return <StyledButton>{isContinue ? "Continue" : "Submit"}</StyledButton>;
};
