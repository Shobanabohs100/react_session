"use strict";

class List extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    let users = await fetch("https://session.free.beeceptor.com/users");
    debugger;
  }

  render() {
    <div>data</div>;
  }
}

const List = () => {
  let users = [
    { name: "John", id: "1" },
    { name: "Windy", id: "2" },
    { name: "Rachel", id: "3" },
    { name: "Mark", id: "4" },
    { name: "Steve", id: "5" },
    { name: "Lary", id: "6" }
  ];
  return (
    <div className="list">
      <div className="list_header">Users</div>
      <div className="list_item">
        <i className="fa fa-user list_item_icon" aria-hidden="true" />
        <div className="list_item_name">John</div>
      </div>
      <div className="list_item">
        <i className="fa fa-user list_item_icon" aria-hidden="true" />
        <div className="list_item_name">Windy</div>
      </div>
      <div className="list_item">
        <i className="fa fa-user list_item_icon" aria-hidden="true" />
        <div className="list_item_name">Rachel</div>
      </div>
      <div className="list_item">
        <i className="fa fa-user list_item_icon" aria-hidden="true" />
        <div className="list_item_name">Mark</div>
      </div>
      <div className="list_item">
        <i className="fa fa-user list_item_icon" aria-hidden="true" />
        <div className="list_item_name">Steve</div>
      </div>
      <div className="list_item">
        <i className="fa fa-user list_item_icon" aria-hidden="true" />
        <div className="list_item_name">Lary</div>
      </div>
    </div>
  );
};

const App = () => {
  return <List />;
};

let domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
