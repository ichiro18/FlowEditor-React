import React, {Component} from "react";
import theme from "@project_src/common/styles/theme.scss";
import {FlowChartWithState} from "@mrblenny/react-flow-chart";
import {Page} from "@project_src/partials/page";
import {Content} from "@project_src/partials/content";
import {Sidebar} from "@project_src/partials/sidebar";
import {NodeTemplate} from "@project_src/components/flowchart/nodeTemplate";
import {Port} from "@project_src/components/flowchart/port";
import {Link} from "@project_src/components/flowchart/link";
import {Node} from "@project_src/components/flowchart/node";

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

const config = {
  validateLink: ({linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart}) => {
    let valid = true;
    const from = chart.nodes[fromNodeId];
    const to = chart.nodes[toNodeId];
    const fromPort = from.ports[fromPortId];
    const toPort = to.ports[toPortId];
    const links = Object.values(chart.links);

    // not self
    if (!from || !to) return false;
    if (fromNodeId === toNodeId) {
      console.warn('not self');
      return false;
    }

    // not exit
    if (from.type === 'exit') {
      console.warn('not from exit');
      return false;
    }

    if (toPort.type !== 'top') {
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
        if (fromPort && toPort) {
          const ports = Object.values(from.ports);
          return from.type === 'enter'||
            to.type === 'exit' ||
            !!ports.find(item => item.type === 'left' || item.type === 'right')
        }
        return false;
      }
    }
    // not loop without condition
    return valid;
  },
  smartRouting: false,
  taxiPath: false,
  normalizedPath: false,
};

export class SketchPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart,
      config
    };
    this.changeSmartRouting = this.changeSmartRouting.bind(this);
    this.changeTaxiPath = this.changeTaxiPath.bind(this);
    this.changeNormalizedPath = this.changeNormalizedPath.bind(this);
  }

  changeSmartRouting(event) {
    const value = event.target.checked;
    if (value !== undefined) {
      this.setState({config: {
          ...this.state.config,
          smartRouting: value
        }});
    }
  }

  changeTaxiPath(event) {
    const value = event.target.checked;
    if (value !== undefined) {
      this.setState({config: {
          ...this.state.config,
          taxiPath: value
        }});
    }
  }

  changeNormalizedPath(event) {
    const value = event.target.checked;
    if (value !== undefined) {
      this.setState({config: {
          ...this.state.config,
          normalizedPath: value
        }});
    }
  }

  render() {
    return (
      <Page>
        <Content>
          <FlowChartWithState
            initialValue={this.state.chart}
            Components={{
              Port,
              Link,
              Node,
            }}
            config={this.state.config}
          />
        </Content>
        <Sidebar>
          <NodeTemplate
            type="enter"
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
              },
            }}
          />
          <NodeTemplate
            type="exit"
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
          <div className={theme.form}>
            <h3>Настройки</h3>
            <div className={theme.form__field}>
              <input type="checkbox" id="smartRouting" name="smartRouting" onChange={this.changeSmartRouting}/>
              <label htmlFor="smartRouting">smartRouting</label>
            </div>
            <div className={theme.form__field}>
              <input type="checkbox" id="taxiPath" name="taxiPath" onChange={this.changeTaxiPath}/>
              <label htmlFor="taxiPath">taxiPath</label>
            </div>
            <div className={theme.form__field}>
              <input type="checkbox" id="normalizedPath" name="normalizedPath" onChange={this.changeNormalizedPath}/>
              <label htmlFor="normalizedPath">normalizedPath</label>
            </div>
          </div>
        </Sidebar>
      </Page>
    );
  }
}
