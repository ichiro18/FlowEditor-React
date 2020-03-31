import React from "react";
import theme from "@project_src/common/styles/theme.scss";

export const Page = ({ children }) => (
  <div className={theme.page}>
    { children }
  </div>
);
