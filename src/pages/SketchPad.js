import React, { Component } from "react";
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { Page } from "@project_src/partials/page";
import { Content } from "@project_src/partials/content";
import { Sidebar } from "@project_src/partials/sidebar";
import { NodeTemplate } from "@project_src/components/flowchart/nodeTemplate";

const chart = {
  offset: {
    x: 0,
    y: 0,
  },
  nodes: {
    node1: {
      id: "node1",
      type: "output-only",
      position: {
        x: 300,
        y: 100,
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          properties: {
            value: "yes",
          },
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "no",
          },
        },
      },
    },
    node2: {
      id: "node2",
      type: "input-output",
      position: {
        x: 300,
        y: 300,
      },
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
    },
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port2",
      },
      to: {
        nodeId: "node2",
        portId: "port1",
      },
    },
  },
  selected: {},
  hovered: {},
};

export class SketchPad extends Component {
  render() {
    return (
      <Page>
        <Content>
          <FlowChartWithState initialValue={chart} />
        </Content>
        <Sidebar>
          <NodeTemplate
            type="top/bottom"
            ports={{
              port1: {
                id: "port1",
                type: "top",
                properties: {
                  custom: "property",
                },
              },
              port2: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property",
                },
              },
            }}
            properties={{
              custom: "property",
            }}
          />
          <NodeTemplate
            type="bottom-only"
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
            type="all-sides"
            ports={{
              port1: {
                id: "port1",
                type: "left",
              },
              port2: {
                id: "port2",
                type: "right",
              },
              port3: {
                id: "port3",
                type: "top",
              },
              port4: {
                id: "port4",
                type: "bottom",
              },
            }}
          />
          <NodeTemplate
            type="lots-of-ports"
            ports={{
              port1: {
                id: "port1",
                type: "left",
              },
              port2: {
                id: "port2",
                type: "right",
              },
              port3: {
                id: "port3",
                type: "top",
              },
              port4: {
                id: "port4",
                type: "bottom",
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
                type: "top",
              },
              port8: {
                id: "port8",
                type: "bottom",
              },
              port9: {
                id: "port9",
                type: "left",
              },
              port10: {
                id: "port10",
                type: "right",
              },
              port11: {
                id: "port11",
                type: "top",
              },
              port12: {
                id: "port12",
                type: "bottom",
              },
            }}
          />
        </Sidebar>
      </Page>
    );
  }
}
