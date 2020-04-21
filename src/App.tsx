import * as React from "react";
import Page from "./containers/Page";
import theme from "./assets/styles/theme.scss";
import { Header } from "./components/partials/header/header";

export class App extends React.Component<any, any> {
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
      <Page>
        <Header />
        <main className={theme.content}>Content</main>
      </Page>
    );
  }
}

export default App;
