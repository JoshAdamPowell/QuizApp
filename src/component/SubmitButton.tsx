import React from "react";
import styled from "styled-components";

import { white, midNavy, darkNavy, darkGrey, black } from "colours/colours";

const StyledButton = styled.button`
  background: ${midNavy};
  border: 2px solid ${darkNavy};
  color: ${white};
  display: flex;
  border-radius: 10px;
  margin: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    background: ${darkNavy};
  }

  &:disabled {
    cursor: default;
    background: ${darkGrey};
    border-color: ${black};
  }
`;

interface SubmitButtonProps {
  isContinue: boolean;
  disabled: boolean;
  onSubmit: React.MouseEventHandler;
  onContinue: React.MouseEventHandler;
}

export const SubmitButton = ({
  isContinue,
  disabled,
  onSubmit,
  onContinue,
}: SubmitButtonProps): React.ReactElement => (
  <StyledButton
    disabled={disabled}
    onClick={isContinue ? onContinue : onSubmit}
  >
    {isContinue ? "Continue" : "Submit"}
  </StyledButton>
);
