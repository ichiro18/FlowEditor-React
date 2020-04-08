import React, {Component} from "react";
import {FlowChartWithState} from "@mrblenny/react-flow-chart";
import {Page} from "@project_src/partials/page";
import {Content} from "@project_src/partials/content";
import {Sidebar} from "@project_src/partials/sidebar";
import {NodeTemplate} from "@project_src/components/flowchart/nodeTemplate";
import {Port} from "@project_src/components/flowchart/port";

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
          <FlowChartWithState
            initialValue={chart}
            Components={{
              Port
            }}
            config={{
              validateLink: ({linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart}) => {
                let valid = true;
                const from = chart.nodes[fromNodeId];
                const to = chart.nodes[toNodeId];
                const links = Object.values(chart.links);

                // not self
                if (!from || !to) return false;
                if (fromNodeId === toNodeId) {
                  console.warn('not self');
                  return false;
                }
                // only in
                if (from.ports[fromPortId].type === 'top') {
                  console.warn('not from top');
                  return false;
                }
                if (to.ports[toPortId].type !== 'top') {
                  console.warn('only to top');
                  return false;
                }

                for (const link of links) {
                  // not multiple
                  if (link.from.nodeId === fromNodeId && link.from.portId === fromPortId && link.id !== linkId) {
                    console.warn('not multiple from port');
                    return false;
                  }
                  if (link.to.nodeId === toNodeId && link.to.portId === toPortId && link.id !== linkId) {
                    if (from.type !== 'exit-only') return false;
                  }
                }
                // not loop without condition
                return valid;
              },
              smartRouting: true,
            }}
          />
        </Content>
        <Sidebar>
          <NodeTemplate
            type="exit-only"
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
              },
            }}
          />
          <NodeTemplate
            type="enter-only"
            ports={{
              port1: {
                id: "port1",
                type: "top",
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
