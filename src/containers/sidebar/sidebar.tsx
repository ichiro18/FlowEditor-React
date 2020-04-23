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
    return <aside className={s.sidebar}>{this.props.children}</aside>;
  }
}

export default Sidebar;
