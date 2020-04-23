import React from "react";
import { cloneDeep, mapValues } from "lodash";
import { FlowChart } from "@mrblenny/react-flow-chart/src";
import * as FlowchartActions from "@mrblenny/react-flow-chart/src/container/actions";
import FlowchartConst from "../../../constants/Flowchart";

export class Flowchart extends React.Component<any, any> {
  public state = cloneDeep(FlowchartConst.DATA);
  render(){
    const chart = this.state;
    const stateActions = mapValues(FlowchartActions, (func: any) =>
      (...args: any) => this.setState(func(...args))) as typeof FlowchartActions;

    return <FlowChart
      chart={chart}
      callbacks={stateActions}
    />;
  }
}
