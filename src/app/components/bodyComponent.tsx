import React from "react";
import CSS from "csstype";

const bodyStyles: CSS.Properties = {
  minHeight: "100vh",
  margin: "110px 0px",
};
const BodyComponent = ({ children }: any) => {
  return <div style={bodyStyles}>{children}</div>;
};

export default BodyComponent;
