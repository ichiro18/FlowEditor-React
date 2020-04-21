import * as React from "react";
import s from "./header.scss";

export class Header extends React.Component<any, any> {
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
    return <header className={s.header}>Header</header>;
  }
}
