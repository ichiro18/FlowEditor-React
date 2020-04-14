import React from "react";
import style from "./node.scss";
import styled, { css } from "styled-components";

export const Node = styled.div`
  position: absolute;
  transition: 0.3s ease box-shadow, 0.3s ease margin-top;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 4px;
  min-width: 200px;
  ${(props) => props.isSelected && css`
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    margin-top: -2px
    `
  }
`;

export default Node
