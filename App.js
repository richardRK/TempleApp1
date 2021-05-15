import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import mealsReducer from "./store/reducers/meals";
import templesReducer from "./store/reducers/temples";

import Navigator from "./navigation/Navigator";

export default class App extends Component {
  render() {
    const rootReducer = combineReducers({
      meals: mealsReducer,
      temples: templesReducer,
    });

    const store = createStore(rootReducer);

    console.disableYellowBox = true;

    const {
      navigation,
      item,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      ctaRight,
      titleStyle,
    } = this.props;

    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
