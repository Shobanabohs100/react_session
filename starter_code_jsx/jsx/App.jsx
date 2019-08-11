"use strict";

const App = () => {
  return <div>App is loading from react...</div>;
};

let domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
