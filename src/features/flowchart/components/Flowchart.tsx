import React, { Component } from "react";
import { cloneDeep, mapValues } from "lodash";
import { FlowChart, INodeDefaultProps } from "@mrblenny/react-flow-chart/src";
import * as FlowchartActions from "@mrblenny/react-flow-chart/src/container/actions";
import FlowchartConst from "../../../constants/Flowchart";
import { Node } from "./node/node";
import { Link } from "./link/link";
import { Port } from "./port/port";
import { IFlowChartComponents } from "../../../../lib/flowchart/src/components/FlowChart";

export class Flowchart extends Component<any, any> {
  public state = cloneDeep(FlowchartConst.DATA);

  render() {
    const chart = this.state;
    const stateActions = mapValues(
      FlowchartActions,
      (func: any) => (...args: any) => this.setState(func(...args))
    ) as typeof FlowchartActions;

    const components: IFlowChartComponents = {
      Node,
      Port,
      Link,
    };

    return (
      <FlowChart
        chart={chart}
        callbacks={stateActions}
        Components={components}
      />
    );
  }
}
