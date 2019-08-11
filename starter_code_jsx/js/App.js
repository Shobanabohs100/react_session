"use strict";

var App = function App() {
  return React.createElement(
    "div",
    null,
    "App is loading from react..."
  );
};

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App, null), domContainer);