// * Global
import * as React from "react";
import { Provider } from "react-redux";

// * Extension
import store from "./store";

// * Custom
import theme from "./assets/styles/theme.scss";

// * Components
import Page from "./containers/Page";
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
      <Provider store={store}>
        <Page>
          <Header />
          <main className={theme.content}>Content</main>
        </Page>
      </Provider>
    );
  }
}

export default App;
