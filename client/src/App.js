import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      nextUserId: '',
      currentUser: null,
      nextFirstName: '',
      nextLastName: '',
      newUser: ''
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
      this.setState({users: data.users});
    })
    .catch(e => {
      console.log(`An error occurred: ${e}`);
    });
  }

  trackUserIdInput(e){
    e.preventDefault();
    this.setState({nextUserId: e.target.value})
  }

  getUser(e){
    e.preventDefault();
    const newUserId = parseInt(this.state.nextUserId);
    let url = `/user/${newUserId}`;
    fetch(url)
    .then(r => {
      return r.json();
    })
    .then(data => {
      this.setState({currentUser: data.user});
    })
    .catch(e => {
      console.log(`An error occurred: ${e}`);
    });
  }

  showCurrentUser(){
    if(this.state.currentUser){
      return(
        <div>
          <ul>
            <li><b>User ID:</b> {this.state.currentUser.id} | <b>First Name:</b>
            {this.state.currentUser.firstName} | <b>Last Name:</b> {this.state.currentUser.lastName}</li>
          </ul>
        </div>
      )
    }
  }

  trackFirstName(e){
    e.preventDefault();
    this.setState({nextFirstName: e.target.value});
  }

  addUser(e){
    e.preventDefault();
    const newUser = {
      firstName: this.state.nextFirstName,
      lastName: this.state.nextLastName
    }
    let url = "/add_user";
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newUser})
    })
    .then(r => {
      return r.json();
    })
    .then(data => {
      this.setState({newUser: data.user, nextFirstName: '', nextLastName: ''})
    })
    .catch(e => {
      console.log(`An error occurred: ${e}`);
    });

  }

  trackLastName(e){
    e.preventDefault();
    this.setState({nextLastName: e.target.value});
  }

  showNewUser(){
    if(this.state.newUser){
      return(
        <div>
          <ul>
            <li><b>User ID:</b> {this.state.newUser.id} | <b>First Name:</b>
            {this.state.newUser.firstName} | <b>Last Name:</b> {this.state.newUser.lastName}</li>
          </ul>
        </div>
      )
    }
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
          <input type="text" value={this.state.nextUserId} onChange={(e) => this.trackUserIdInput(e)} />
          <button onClick={(e) => this.getUser(e)}>Get User (Enter ID)</button>
          <h5>Current User</h5>
          {this.showCurrentUser()}

          <hr/>

          <h5>Enter New User Info</h5>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" value={this.state.nextFirstName} onChange={(e) => this.trackFirstName(e)}/>
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" value={this.state.nextLastName} onChange={(e) => this.trackLastName(e)}/>
          <br/>
          <button onClick={(e) => this.addUser(e)}>Add User</button>
          <h5>New User</h5>
          {this.showNewUser()}

        </main>
        
      </div>
    );
  }
}

export default App;
