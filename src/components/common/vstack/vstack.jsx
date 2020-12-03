import React from "react";
import "./vstack.css";

export const VStack = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: props.reverse ? "column-reverse" : "column",
    }}
  >
    {props.children}
  </div>
);
