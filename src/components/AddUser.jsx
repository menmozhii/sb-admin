import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



function AddUser({user,setUser}) {
  const navigate =useNavigate()
  const [fristname,setFristname]=useState("")
  const [lastname,setLastname]=useState("")
  const [emailid,setEmailid]=useState("")
  const handleSubmit =()=>{
  console.log(
    fristname,lastname,emailid
  )
  let newArray =[...user]
  newArray.push({
    fristname,
    lastname,
    emailid
  })
  setUser(newArray)
  navigate('/dashboard')
  }
  return<>
  {/* <h1>hi  i am add user</h1> */}
  <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
     <div className="container-fluid">
      <h1>adduser</h1>
   </div>
{/* form stats here */}
<Form>

      <Form.Group className="mb-3"  >
        <Form.Label>fristname</Form.Label>
        <Form.Control type="text" placeholder="Enter Fname"  onChange={(e)=>setFristname(e.target.value)}  />
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>lastname</Form.Label>
        <Form.Control type="text" placeholder="enter Lname" onChange={(e)=>setLastname(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>emailid</Form.Label>
        <Form.Control type="email" placeholder="enter email" onChange={(e)=>setEmailid(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleSubmit() }>
        Submit
      </Button>
    </Form>


      </div>
      </div>
  </>
}

export default AddUser