import React, { Component } from "react";
import Sidebar from "../../../containers/sidebar/sidebar";
import SidebarStyles from "../../../containers/sidebar/sidebar.scss";
import { Template } from "./template/template";

export class Templater extends Component {
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
    return (
      <Sidebar>
        <h3 className={SidebarStyles.sidebar__title}>Шаблоны</h3>
        <div className="template__list">
          <Template
            type="enter"
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
              },
            }}
          />
          <Template
            type="exit"
            ports={{
              port1: {
                id: "port1",
                type: "top",
              },
            }}
          />
          <Template
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
          <Template
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
          <Template
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
          <Template
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
          <Template
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
        </div>
      </Sidebar>
    );
  }
}

export default Templater;
