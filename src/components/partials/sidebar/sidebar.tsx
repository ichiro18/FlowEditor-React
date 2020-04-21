import * as React from "react";
import s from "./sidebar.scss";

export class Sidebar extends React.Component<any, any> {
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
    return <aside>{this.props.children}</aside>;
  }
}
