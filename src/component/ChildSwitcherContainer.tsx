import React from "react";

interface ChildSwitcherContainerProps {
  index: number;
  children: React.ReactElement[] | React.ReactElement;
}

const ChildSwitcherContainer = ({
  index,
  children,
}: ChildSwitcherContainerProps): React.ReactElement => (
  <>{[].concat(children)[index]}</>
);

export default ChildSwitcherContainer;
