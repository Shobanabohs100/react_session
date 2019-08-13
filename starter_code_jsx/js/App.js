"use strict";

var App = function App() {
  return React.createElement(
    "div",
    { className: "list" },
    React.createElement(
      "div",
      { className: "list_header" },
      "Users"
    ),
    React.createElement(
      "div",
      { className: "list_item" },
      React.createElement("i", { className: "fa fa-user list_item_icon", "aria-hidden": "true" }),
      React.createElement(
        "div",
        { className: "list_item_name" },
        "John"
      )
    ),
    React.createElement(
      "div",
      { className: "list_item" },
      React.createElement("i", { className: "fa fa-user list_item_icon", "aria-hidden": "true" }),
      React.createElement(
        "div",
        { className: "list_item_name" },
        "Windy"
      )
    ),
    React.createElement(
      "div",
      { className: "list_item" },
      React.createElement("i", { className: "fa fa-user list_item_icon", "aria-hidden": "true" }),
      React.createElement(
        "div",
        { className: "list_item_name" },
        "Rachel"
      )
    ),
    React.createElement(
      "div",
      { className: "list_item" },
      React.createElement("i", { className: "fa fa-user list_item_icon", "aria-hidden": "true" }),
      React.createElement(
        "div",
        { className: "list_item_name" },
        "Mark"
      )
    ),
    React.createElement(
      "div",
      { className: "list_item" },
      React.createElement("i", { className: "fa fa-user list_item_icon", "aria-hidden": "true" }),
      React.createElement(
        "div",
        { className: "list_item_name" },
        "Steve"
      )
    ),
    React.createElement(
      "div",
      { className: "list_item" },
      React.createElement("i", { className: "fa fa-user list_item_icon", "aria-hidden": "true" }),
      React.createElement(
        "div",
        { className: "list_item_name" },
        "Lary"
      )
    )
  );
};

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App, null), domContainer);