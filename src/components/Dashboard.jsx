import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function Dashboard({user,setUser}) {

    const data =[{
        isprogress:false,
        title:"Earnings (Monthly)",
        icon:"fa-calendar",
        color:"primary",
        value:"$40,000"
        
    },
    {
        isprogress:false,
        title:"Earnings (Monthly)",
        icon:"fa-comments",
        color:"warning",
        value:"500000"
    },
    {
        isprogress:true,
        title:"Earnings (Monthly)",
        icon:"fa-clipboard-list",
        color:"info",
        value:"50"
    },
    {
        isprogress:false,
        title:"Earnings (Monthly)",
        icon:"fa-dollar",
        color:"danger",
        value:"18"
    }
]

const navigate= useNavigate()

const handleDelete =(i)=>{
 
  let newArray= [...user]
  newArray.splice(i,1)
  setUser(newArray)
 
}
  return (
    <>
     <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
     <div className="container-fluid">
     <div className="row">
    {
        data.map((e,i)=>{
            return <Card data ={e} key ={i} />
        })
    }
        </div>
        <div className="row">
            <div className="container-fluid">
                
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>emailid</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((e,i)=>{
            return <tr key ={i}>
              <td>{i+1}</td>
              <td>{e.fristname}</td>
              <td>{e.lastname}</td>
              <td>{e.emailid}</td>
               <td><Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>&nbsp;
               <Button variant="danger" onClick={()=>handleDelete(i)}>delete</Button>
               </td>
               
   
           
             
            </tr>
          })
        }

      </tbody>
    </Table>
            </div>
        </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Dashboard