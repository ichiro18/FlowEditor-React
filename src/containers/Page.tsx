import * as React from "react";
import s from "../assets/styles/theme.scss";

export class Page extends React.Component<{}, {}> {
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
    return <div className={s.page}>{this.props.children}</div>;
  }
}

export default Page;
