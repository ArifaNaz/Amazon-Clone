import React, { Fragment } from "react";
import {Button,Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import Home from './images/ComponentsCurd/Home';

function Home() {
  return (
    <div>
      <Fragment>
            <div style={{margin:'10rem'}}>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>
                        Name
                        </th>

                        <th>
                           Age 
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                      Employees && Employees.length>0
                      ?
                      Employees.map((item)=>{
                        return(
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>

                            </tr>
                        )
                      })  
                    :
                    'No Data Available'
                    }
                </tbody>
            </Table>
            </div>
        </Fragment>
    </div>
  )
}

export default Home




