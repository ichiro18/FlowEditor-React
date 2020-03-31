import React, { Component } from "react";
import { Header } from "@project_src/partials/header";
import { SketchPad } from "@project_src/pages/SketchPad";
import { Page } from "@project_src/partials/page";
import theme from "@project_src/common/styles/theme.scss";

export class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <main className={theme.content}>
          <SketchPad />
        </main>
      </Page>
    );
  }
}

export default App;
