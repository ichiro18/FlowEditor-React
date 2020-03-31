import theme from "@project_src/common/styles/theme.scss";
import React from "react";

export const Sidebar = ({children}) => (
  <aside className={theme.sidebar}>
    { children }
  </aside>
)
