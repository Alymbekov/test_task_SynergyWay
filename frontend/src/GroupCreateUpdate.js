import React, { Component } from 'react';
import GroupsService from './GroupsService';

const groupsService = new GroupsService();

class GroupCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          groupsService.getGroup(params.pk).then((c)=>{
            this.refs.name.value = c.name;
            this.refs.description.value = c.description
          })
        }
      }

      handleCreate(){
        groupsService.createGroup(
          {
            "name": this.refs.name.value,
            "description": this.refs.description.value,
        }
        ).then((result)=>{
          alert("Group created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(id){
        groupsService.updateGroup(
          {
            "id": id,
            "name": this.refs.name.value,
            "description": this.refs.description.value,
        }
        ).then((result)=>{
          console.log(result);
          alert("Group updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name:</label>
              <input className="form-control" type="text" ref='name' />

              <label>
              Description:</label>
              <textarea className="form-control" ref='description' ></textarea>
              
            <input className="btn btn-primary" type="submit" value="Submit" />

            </div>
          </form>
        );
      }
}

export default GroupCreateUpdate;