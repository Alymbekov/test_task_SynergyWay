import React, { Component } from 'react';
import { Label, Button } from 'reactstrap';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import UsersService from './UsersService';
import GroupsService from './GroupsService';

const usersService = new UsersService();
const groupsService = new GroupsService();

class UserCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
          user:{
            username:'',
            group:[]
          },
          allGroups:[],
        }
      }

      componentDidMount(){
        groupsService.getGroups().then(({results})=>{
          this.setState({allGroups:results})
        })
      }
      handleSubmit(event, values) {
        event.preventDefault();
        usersService.createUser(values)
          .then(()=>{alert("User created!")})
          .catch(()=>{alert('There was an error! Please re-check your form.')});
      }
      render() {
        const user = this.state.user
        return (
          <AvForm onValidSubmit={this.handleSubmit}>
            <AvGroup>
              <Label for="user-name-inp">Username:</Label>
              <AvInput value={user.username} type="text" name="username" id="user-name-inp" placeholder="Enter your name" required/>
            </AvGroup>

            <AvGroup>
              <Label for="user-group-inp">Groups:</Label>
              <AvInput type="select" name="group" id="user-group-inp" multiple required>
                {this.state.allGroups.map(item=>(
                  <option key={item.id+"-drop-item"} value={item.name}>{item.name}</option>
                ))}
              </AvInput>
            </AvGroup>
              
            <Button>Submit</Button>
          </AvForm>
        );
      }
}

export default UserCreateUpdate;