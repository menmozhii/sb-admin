import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


function App() {
  const [user,setUser]=useState([{
    fristname:"men",
    lastname:"mozhi",
    emailid:"men@123"
  },
  { fristname:"sara",
  lastname:"vana",
  emailid:"sara@123"
},
  {
    fristname:"rana",
  lastname:"theean",
  emailid:"rana@123"},
  {
    fristname:"athi",
  lastname:"athikan",
  emailid:"athi@123"
  }
]) 


 return<>
 <BrowserRouter>
<div id="wrapper">
<Sidebar/>
<Routes>
  <Route path="/dashboard" element = {<Dashboard user ={user} setUser={setUser}/>}/>
  <Route  path="/add-user" element = {<AddUser user ={user} setUser={setUser}/>}/>
  <Route path = "/edit-user/:id" element ={<EditUser user ={user} setUser={setUser}/>}/>
  <Route path= "*" element={<Navigate to="/dashboard"/>} />
</Routes>


</div>
</BrowserRouter>

  </>
}

export default App
