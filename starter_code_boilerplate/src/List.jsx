import React from "react";

//  Presentation component

class List extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    // GET API
    const users = await this.fetchUsers();
    this.setState(
      {
        users: users
      },
      () => {
        console.log(this.state);
      }
    );
  }

  async fetchUsers() {
    let response = await fetch("https://session.free.beeceptor.com/users");
    return await response.json();
  }

  render() {
    console.log("render");
    const users = this.state.users;
    return (
      <div className="list">
        <div className="list_header">Users</div>
        {users.map(user => (
          <ListItem key={user.name} data={user} />
        ))}
      </div>
    );
  }
}

// Functional component
const ListItem = ({ data }) => {
  return (
    <div className="list_item">
      <i className="fa fa-user list_item_icon" aria-hidden="true" />
      <div className="list_item_name">{data.name}</div>
    </div>
  );
};

export default List;
