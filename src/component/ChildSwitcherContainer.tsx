import React from "react";

interface ChildSwitcherContainerProps {
  index: number;
  children: React.ReactNode;
}

const ChildSwitcherContainer = ({
  index,
  children,
}: ChildSwitcherContainerProps): React.ReactElement => (
  <>{[].concat(children)[index]}</>
);

export default ChildSwitcherContainer;
