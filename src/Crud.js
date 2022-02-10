import {React, Component} from 'react';
import './App.css';
import './app.scss';

class Crud extends Component
{
  constructor(){
    super();
    this.state={
      title:"Register here",
        employeeData :[],
        act:0,
        idx:''
    

    }
  }

  componentDidMount(){
    this.refs.txtName.focus();
  }

handleSubmit=(e)=>{
  e.preventDefault();
  let employeeData=this.state.employeeData;
  let  name=this.refs.txtName.value;
 let age =this.refs.txtAge.value;
  let email=this.refs.txtEmail.value;

  if(this.state.act === 0)
  {
    let newEmployee={
      "name":name,
      "age":age,
      "email":email
    }
    employeeData.push(newEmployee);
  }
  else{
    let index=this.state.idx;
    employeeData[index].name= name;
    employeeData[index].age= age;
    employeeData[index].email=email;
  }
  this.setState({
    employeeData:employeeData,
    act:0
  })

  this.refs.myform.reset();
  this.refs.txtName.focus();
}

handleEdit = (index) => {
  let employeeData = this.state.employeeData[index];
  this.refs.txtName.value = employeeData.name;
  this.refs.txtAge.value = employeeData.age;
  this.refs.txtEmail.value=employeeData.email;
  this.setState({
    act: 1,
    idx : index
  })
  //console.log(data);
}

handleDelete=(index)=>{
  let employeeData=this.state.employeeData;
  employeeData.splice(index,1);
  this.setState({
    employeeData : employeeData
      });   
}


  render(){
  
    let employeeData=this.state.employeeData;
    return(
    <div>
    
     
      <form   ref="myform" className='myForm'>
      <h1>{this.state.title}</h1>
        <label>Name</label>
        <input type="text" ref="txtName" placeholder='enter name' className='formField'/>

        <label>Age</label>
        <input type="text" ref="txtAge" placeholder='enter age'  className='formField'/>

        <label>Email</label>
        <input type="text" ref="txtEmail" placeholder='enter Email'  className='formField'/>

          <button onClick={e=>this.handleSubmit(e)} className='myButton'>save</button>
      </form>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {
          employeeData.map((data, index)=>

          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.email}</td>
            <td>
              <button onClick={e=>this.handleEdit(index)} className='myListButton'> Edit</button>
            </td>
            <td>
              <button onClick={e=>this.handleDelete(index)} className='myListButton'>Delete</button>
            </td>
          </tr>)
        
  }
      </table>
      </div>
          )
  }

}


export default Crud;