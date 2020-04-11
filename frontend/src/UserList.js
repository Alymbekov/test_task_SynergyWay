import  React, { Component } from  'react';
import  UsersService  from  './UsersService';

const  usersService  =  new  UsersService();

class  UsersList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        users: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    usersService.getUsers().then(function (result) {
        console.log(result);
        self.setState({ users:  result.results, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,id){
    var  self  =  this;
    usersService.deleteUser({id :  id}).then(()=>{
        var  newArr  =  self.state.users.filter(function(obj) {
            return  obj.id  !==  id;
        });

        self.setState({users:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    usersService.getUsersByURL(this.state.nextPageURL).then((result) => {
        self.setState({ users:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="users--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Created</th>
                <th>Groups</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.users.map( c  =>
                <tr  key={c.id}>
                <td>{c.id}  </td>
                <td>{c.username}</td>
                <td>{c.created}</td>
                <td>{c.group.map( k  =>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{k}</li>                    
                    </ul>
                )}</td>
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,c.id) }> Delete</button>
                <a  href={"/user/" + c.id}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  UsersList;