import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/dist/css/react-widgets.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>{this.showContentMenu(routes)}</Switch>
        </div>
      </Router>
    );
  }

  showContentMenu = routes => {
    var result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  };
}

export default App;
