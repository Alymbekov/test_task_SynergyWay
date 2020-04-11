import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  UsersList  from  './UserList'
import  UserCreate  from  './UserCreate'
import  UserUpdate  from  './UserUpdate'
import  GroupsList  from  './GroupsList'
import  GroupCreateUpdate  from  './GroupCreateUpdate'
import  './App.css';

const BaseLayout = () => (
  <div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Test Task Synergy Way</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/">Users</Link>
      <Link className="nav-item nav-link" to="/groups">Groups</Link>
      <Link className="nav-item nav-link" to="/user">Create User</Link>
      <Link className="nav-item nav-link" to="/group">Create Group</Link>
    </div>
  </div>
</nav>

    <div className="content">
      <Route path="/" exact component={UsersList} />
      <Route path="/user/:pk"  component={UserUpdate} />
      <Route path="/user/" exact component={UserCreate} />
      <Route path="/groups/" exact component={GroupsList} />
      <Route path="/group/:pk"  component={GroupCreateUpdate} />
      <Route path="/group/" exact component={GroupCreateUpdate} />

    </div>

  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
