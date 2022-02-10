import React, { Component, useState } from 'react'
import './App.css';
import {Link} from 'react-router-dom';

 
class Tble extends Component {
   
   
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { FirstName: 1, LastName: 'AAAAA', Email: 21, Password: 'AAAAA@email.com' },
            { FirstName: 2, LastName: 'BBBBB', Email: 24, Password: 'BBBBBB@Password.com' },
            { FirstName: 3, LastName: 'CCCCC', Email: 19, Password: 'CCCCC@Passwwrd.com' },
            { FirstName: 4, LastName: 'DDDDD', Email: 16, Password: 'DDDDD@Password.com' },
            { FirstName: 5, LastName: 'EEEEE', Email: 25, Password: 'EEEEE@Password.com' },
            { FirstName: 6, LastName: 'FFFFF', Email: 25, Password: 'FFFFF@Password.com' },
            { FirstName: 7, LastName: 'GGGGG', Email: 25, Password: 'GGGGG@Password.com' },
            { FirstName: 8, LastName: 'HHHHH', Email: 27, Password: 'HHHHH@Password.com' },
            { FirstName: 9, LastName: 'IIIII', Email: 30, Password: 'IIIII@Password.com' },
            { FirstName: 10, LastName: 'JJJJJ', Email: 25, Paswword: 'JJJJJ@Paswword.com' },
            { FirstName: 11, LastName: 'KKKKK', Email: 25, Password: 'KKKKK@email.cwm' },
         ]
      }
    
      
   }
   
   renderTableData() {
    return this.state.students.map((student, index) => {
            const { FirstName, LastName, Email, Password } = student 
       return (
        < div className="container">
         <div className="py-4">
          
           <table class="table border shadow">
             <thead class="thead-dark">
          <tr key={FirstName}>
             <th>{FirstName}</th>
             <th>{LastName}</th>
             <th>{Email}</th>
             <th>{Password}</th>
             <th>Action</th>
          </tr>
          </thead>
          <tbody>
            
            <tr>
              <th scope="row"></th>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td></td>
              </tr>
          
              </tbody>
          </table>
          </div>
          </div>
    
       )
    })
 }
//  renderTableHeader() {
//    let header = Object.keys(this.state.students[0])
//    return header.map((key, index) => {
//       return <th key={index}>{key.toUpperCase()}</th>
//    })

// }

 
 
   render() {
     
           return (
         <div>
             
            <h1 id='title'>React Dynamic Table</h1>
                        
            <table id='students'>
               <tbody>
               {/* <tr>{this.renderTableHeader()}</tr> */}
                  {this.renderTableData()}
                                    
               </tbody>
            </table>
         </div>
      )
   }
}


export default Tble