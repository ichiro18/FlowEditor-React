import * as React from "react";
import s from "./header.scss";
import logo from "../../../assets/images/logo.png";

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
    return (
      <header className={s.header}>
        <a className={s.brand} href="/">
          <img src={logo} className={s.brand__logo} alt="logo" />
          <h3 className={s.brand__title}>Flowchart Editor</h3>
        </a>
      </header>
    );
  }
}
