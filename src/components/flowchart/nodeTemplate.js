import React from "react";
import styled from "styled-components";
import {REACT_FLOW_CHART} from "@mrblenny/react-flow-chart/src"

const Outer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  cursor: move;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const NodeTemplate = ({ type, ports, properties }) => {
  return (
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
      } }
    >
      {type}
    </Outer>
  )
};
