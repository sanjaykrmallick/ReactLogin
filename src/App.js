import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import LoginComp from "./components/LoginComp";
import UserPage from "./components/UserPage";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <PersistGate loading={<div></div>} persistor={persistor}>
            <Router>
              <header>
                <HeaderComp />
              </header>
              <main>
                <Switch>
                  <Route exact path={["/", "/login"]} component={LoginComp} />
                  <Route exact path={"/userpage"} component={UserPage} />
                  {/* <Route exact path='/add' component={AddData} /> */}
                </Switch>
              </main>
            </Router>
          </PersistGate>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
