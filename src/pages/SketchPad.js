import React, {Component} from "react";
import {FlowChartWithState} from "@mrblenny/react-flow-chart";
import {Page} from "@project_src/partials/page";
import {Content} from "@project_src/partials/content";
import {Sidebar} from "@project_src/partials/sidebar";
import {NodeTemplate} from "@project_src/components/flowchart/nodeTemplate";

const chart = {
  offset: {
    x: 0,
    y: 0,
  },
  nodes: {},
  links: {},
  selected: {},
  hovered: {},
};

export class SketchPad extends Component {
  render() {
    return (
      <Page>
        <Content>
          <FlowChartWithState initialValue={chart}/>
        </Content>
        <Sidebar>
          <NodeTemplate
            type="exit-only"
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property",
                },
              },
            }}
          />
          <NodeTemplate
            type="enter-only"
            ports={{
              port1: {
                id: "port1",
                type: "top",
                properties: {
                  custom: "property",
                },
              },
            }}
          />
          <NodeTemplate
            type="left-right"
            ports={{
              port1: {
                id: "port1",
                type: "left",
                properties: {
                  custom: "property",
                },
              },
              port2: {
                id: "port2",
                type: "right",
                properties: {
                  custom: "property",
                },
              },
            }}
          />
          <NodeTemplate
            type="through"
            ports={{
              port1: {
                id: "port1",
                type: "top",
              },
              port2: {
                id: "port2",
                type: "bottom",
              },
            }}
          />
          <NodeTemplate
            type="condition"
            ports={{
              port1: {
                id: "port1",
                type: "top",
              },
              port2: {
                id: "port2",
                type: "left",
              },
              port3: {
                id: "port3",
                type: "right",
              },
            }}
          />
          <NodeTemplate
            type="through-extras"
            ports={{
              port1: {
                id: "port1",
                type: "top",
              },
              port2: {
                id: "port2",
                type: "bottom",
              },
              port3: {
                id: "port3",
                type: "left",
              },
              port4: {
                id: "port4",
                type: "right",
              },
            }}
          />
          <NodeTemplate
            type="through-extras-more"
            ports={{
              port1: {
                id: "port1",
                type: "top",
              },
              port2: {
                id: "port2",
                type: "bottom",
              },
              port3: {
                id: "port3",
                type: "left",
              },
              port4: {
                id: "port4",
                type: "left",
              },
              port5: {
                id: "port5",
                type: "left",
              },
              port6: {
                id: "port6",
                type: "right",
              },
              port7: {
                id: "port7",
                type: "right",
              },
              port8: {
                id: "port8",
                type: "right",
              },
            }}
          />
          <NodeTemplate
            type="switch"
            ports={{
              port1: {
                id: "port1",
                type: "top",
              },
              port2: {
                id: "port2",
                type: "bottom",
              },
              port3: {
                id: "port3",
                type: "right",
              },
              port4: {
                id: "port4",
                type: "right",
              },
              port5: {
                id: "port5",
                type: "right",
              },
            }}
          />
        </Sidebar>
      </Page>
    );
  }
}
