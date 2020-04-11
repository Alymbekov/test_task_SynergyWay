import  React, { Component } from  'react';
import  GroupsService  from  './GroupsService';

const  groupsService  =  new  GroupsService();

class  GroupsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        groups: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    groupsService.getGroups().then(function (result) {
        console.log(result);
        self.setState({ groups:  result.results, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,id){
    var  self  =  this;
    groupsService.deleteGroup({id :  id}).then(()=>{
        var  newArr  =  self.state.groups.filter(function(obj) {
            return  obj.id  !==  id;
        });

        self.setState({groups:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    groupsService.getGroupsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ groups:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="groups--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.groups.map( c  =>
                <tr  key={c.id}>
                <td>{c.id}  </td>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,c.id) }> Delete</button>
                <a  href={"/group/" + c.id}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  GroupsList;