import React from "react";

interface Props extends React.ComponentProps<"hr"> {}

const Divider = ({ ...props }: Props) => {
  return <hr {...props} />;
};

export default Divider;
