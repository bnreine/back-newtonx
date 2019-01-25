import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  getAllUsers(e){
    e.preventDefault();
    let url = "/all_users";
    fetch(url)
    .then(r => {
      return r.json();
    })
    .then(data => {
      console.log(data)
      this.setState({users: data.users});
    })
    .catch(e => {
      console.log(`An error occurred: ${e}`);
    });
  }


  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header">
          <div className="mdl-layout-icon"></div>
          <div className="mdl-layout__header-row">
            <span className="mdl-layout__title">User RESTful API</span>
            <div className="mdl-layout-spacer"></div>
          </div>
        </header>
        <main className="mdl-layout__content">
          <h5>Get All Users</h5>
          <button onClick={(e) => this.getAllUsers(e)}>Get All Users</button>
          <h5>All Users</h5>
          <ul>
            {this.state.users.map((user, index) =>
              <li key={index}><b>User ID:</b> {user.id} | <b>First Name:</b> {user.firstName} | <b>Last Name:</b> {user.lastName}</li>
            )}
          </ul>
          <hr/>
          <h5>Get User By Id</h5>
          <input type="text" />
          <button>Get User (Enter ID)</button>
          <hr/>
          <h5>Enter New User Info</h5>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" />
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />
          <br/>
          <button>Add User</button>
        </main>
      </div>
    );
  }
}

export default App;
