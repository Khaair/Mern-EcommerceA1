import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProfileNav from "./ProfileNav"


 function Login(props) {
   
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const sendDatatoApp = async () => {
    let x;
    try {
      x = await axios.post('http://localhost:5000/api/users/login-user', { username, password })
      console.log(x.data, 'success')
      localStorage.setItem('auth',x.data.token);
      localStorage.setItem('userrole',x.data.role);
      localStorage.setItem('username',x.data.username);
     
    }
    
    
    
    catch (er) {
      console.log(er)
    }

    if (x.data.success) {
      navigate('/')
    }
    else {
      alert('Registraion faild')
      navigate('/register')
    }

  }






  
  return(
  <>
  

  {/* <ProfileNav/> */}

<div className='container'>
    <form action="">
    <div className="form-group mt-5 ">
    <label htmlFor="">Enter User Name</label>
    <input className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} style={{margin:"12px"}} placeholder="Enter title"/>
    </div>
    <div className="form-group mt-5 ">
    <label htmlFor="">Enter Password</label>
        <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  style={{margin:"12px"}} placeholder="Enter author"/>
        </div>
 
        <button className="btn btn-primary mt-3" type="button" onClick={sendDatatoApp} >Login</button>
    </form>

    </div>
  </>
    

  )
}

export default Login