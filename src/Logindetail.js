import react from "react";
import LoginForm from "./loginForm";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Tble from "./Tble";
import BasicTable from "./BasicTable";
import Crud from "./Crud";
import Cccc from "./Cccc";

const Logindetail =()=>
{
    return(  
    <>
  <Crud/>
    {
localStorage.getItem('Fname') && (
            <div>
              First Name: <p>{localStorage.getItem('Fname')}</p>
             </div> 
         )}
  {
localStorage.getItem('Lname') && (
            <div>
              
                  Last Name: <p>{localStorage.getItem('Lname')}</p>
              
            </div> 
         )}

    {
localStorage.getItem('Name') && (
            <div>
             
               Email ID: <p>{localStorage.getItem('Name')}</p>
              
            </div> 
         )}
         {
                        localStorage.getItem('Password') && (
            <div>
             Password: <p>{localStorage.getItem('Password')}</p>
             </div>
         )}
        

    </>

    );
};





 
export default Logindetail;