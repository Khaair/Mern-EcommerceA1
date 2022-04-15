
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './AdminLogin.css'

//Admin UserNAme : khaaair
//Admin Password : Khair12345


export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const sendDatatoApp = async () => {
    let x;
    try {
      x = await axios.post('http://localhost:5000/api/users/login-admin', { username, password })
      console.log(x.data, 'success')
      localStorage.setItem('auth',x.data.token);
      localStorage.setItem('userrole',x.data.role);
      localStorage.setItem('username',x.data.username);
     
    }
    
    
    
    catch (er) {
      console.log(er)
    }

    if (x.data.success) {
      navigate('/deshboard')
    }
    else {
      alert('Registraion faild')
      navigate('/register')
    }

  }
  return (
    <div>
      <div className="div1">
        <div className="adLogincontainer">
          <h2>Admin Login Form</h2>
          <hr></hr>
          <form action="">
          
              <label  className="name" htmlFor="">Enter User Name</label>
              <input className="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: "12px" }} placeholder="Enter title" />
          
        
              <label className="name" htmlFor="">Enter Password</label>
              <input className="text" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: "12px" }} placeholder="Enter author" />
         

              <button className="btnn" type="button" onClick={sendDatatoApp} >Login</button>

           
            <Link to="/adminregister">Register</Link>
          </form>


        </div>
      </div>

    </div>
  )
}
