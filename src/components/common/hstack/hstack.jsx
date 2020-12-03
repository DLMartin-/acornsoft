import React from "react";

export const HStack = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: props.reverse ? "row-reverse" : "row",
    }}
  >
    {props.children}
  </div>
);
