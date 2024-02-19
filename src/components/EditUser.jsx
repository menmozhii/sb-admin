import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function EditUser({user,setUser}) {
    let params =useParams()
   const navigate =useNavigate()
    // console.log(path_variable,user[path_variable.id])
    

    const [fristname,setFristname]=useState("")
    const [lastname,setLastname]=useState("")
    const [emailid,setEmailid]=useState("")
    useEffect(()=>{
      if(params.id<user.length)
      {
        setFristname(user[params.id].fristname)
        setLastname(user[params.id].lastname)
      setEmailid(user[params.id].emailid)
      }
      else{
        alert("invalid userid" +params.id)
        navigate("/dashboard")
      }
    },[])

    const handleEdit =()=>{
let newArray =[...user]
newArray.splice(params.id,1,{
  fristname,
  lastname,emailid
})
setUser(newArray)
navigate('/dashbord')
    }

  return<>
  <h1>Hi Edit user</h1>
  <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
     <div className="container-fluid">
      {/* <h1>adduser</h1> */}
   </div>
{/* form stats here */}
<Form>

      <Form.Group className="mb-3"  >
        <Form.Label>fristname</Form.Label>
        <Form.Control type="text" placeholder="Enter Fname" value={fristname} onChange={(e)=>setFristname(e.target.value)}  />
        </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>lastname</Form.Label>
        <Form.Control type="text" placeholder="enter Lname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>emailid</Form.Label>
        <Form.Control type="email" placeholder="enter email" value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleEdit()}>
        Submit
      </Button>
    </Form>


      </div>
      </div>
  </>
}

export default EditUser