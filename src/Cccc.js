import { React, Component } from 'react';
import './App.css';
import './app.scss';

class Cccc extends Component {
  constructor(){
    super();
    this.state = {
      title : "Register Here",
      act : 0,
      idx : '',
      datas : []
    }
  }

  componentDidMount(){
    this.refs.txtName.focus();
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;

    if(this.state.act === 0)
    {
      let data = {
        "name" : name,
        "age" : age
      }
      datas.push(data);
    }
    else
    {
        let index = this.state.idx;
        datas[index].name = name;
        datas[index].age = age;        
    }
    //let datas = this.state.datas;
    
    this.setState({
      datas : datas,
      act : 0
    })
    this.refs.myForm.reset();
    this.refs.txtName.focus();
  }

  handleDelete = (index) =>{
    let datas = this.state.datas;
    datas.splice(index,1);
    this.setState({
      datas:datas
    })
    this.refs.txtName.focus();
  }

  handleEdit = (index) => {
    let data = this.state.datas[index];
    this.refs.txtName.value = data.name;
    this.refs.txtAge.value = data.age;
    this.setState({
      act: 1,
      idx : index
    })
    //console.log(data);
  }
  
  render() { 
    let datas = this.state.datas;
    return ( 
      <div className="App">
      
        <form ref="myForm" className="myForm">
        <h1>{this.state.title}</h1>
        
          <label>Name</label>
          <input type="text" ref="txtName" placeholder="Enter name" className="formField"/>
          <label>Age</label>
          <input type="text" ref="txtAge" placeholder="Enter age"  className="formField"/>
          <button onClick={e => this.handleSubmit(e)} className="myButton"> Save</button>
        </form>
        <pre className="listView">
        <table className='table'>
        
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Serial No</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        
          {datas.map((data,index)=>
          <tr key={index}>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td><button onClick={e => this.handleDelete(index)} className="myListButton">Delete</button></td>
          <td><button onClick={e => this.handleEdit (index)} className="myListButton">Edit</button></td>

          </tr>           
        
            )
          }
          </table>
        </pre>
      </div>
     );
  }
}
 
export default Cccc;