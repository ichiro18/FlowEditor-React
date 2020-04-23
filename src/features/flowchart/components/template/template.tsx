import React, { Component } from "react";
import style from "./template.scss";
import { INode, REACT_FLOW_CHART } from "@mrblenny/react-flow-chart/src";

export interface ITemplateProps {
  type: string;
  ports: INode["ports"];
  properties?: any;
}

export class Template extends Component<ITemplateProps, any> {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const { type, ports, properties } = this.props;

    return (
      <div
        className={style.template}
        draggable={true}
        onDragStart={(event) => {
          event.dataTransfer.setData(
            REACT_FLOW_CHART,
            JSON.stringify({ type, ports, properties })
          );
        }}
      >
        {type}
      </div>
    );
  }
}
