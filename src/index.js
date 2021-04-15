import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QuestionsScreen from "./screens/questions";
import ResultScreen from "./screens/results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" exact>
            <QuestionsScreen />
          </Route>
          <Route path="/result" exact>
            <ResultScreen />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
