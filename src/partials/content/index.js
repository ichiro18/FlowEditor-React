import theme from "@project_src/common/styles/theme.scss";
import React from "react";

export const Content = ({ children }) => (
  <div className={theme.content}>
    { children }
  </div>
);
