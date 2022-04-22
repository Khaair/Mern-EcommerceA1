import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const [loginok, setLoginok] = useState('');

 

  


  const navigate = useNavigate();

  const sendDatatoApp = async () => {

    

    
 

    try {
      await axios.post('http://localhost:5000/api/users/login-user', { username, password }).then(async (data) => {
        

        // setLoginok(data.data)
        localStorage.setItem('auth', data.data.token);
        localStorage.setItem('userrole', data.data.role);
        localStorage.setItem('username', data.data.username);

       
        await axios.get(`http://localhost:5000/api/users/profile`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth': localStorage.getItem('auth')
          }
        }).then(async (data2)=>{
         

          console.log(data2.data[0].cart,"okkkk")

          if(data2){
            props.cset(data2.data[0].cart)
            
          }

          console.log(data2, 'profile asche')

      console.log(data.data, 'paisi')
      if (data.data.success) {
        navigate('/')
      }
      else {
        alert('Registraion faild')
        navigate('/register')
      }


        }).catch(err => {
          this.setState({ mesg: err.response.data.message, loding: false })
          this.notify();
          console.log(err)
        })
      }).catch(err => {
        this.setState({ mesg: err.response.data.message, loding: false })
        this.notify();
        // console.log(err)
      })

      // console.log(data, 'success')
    } catch (err) {
      this.setState({ mesg: err.response.data.message, loding: false })
      this.notify();
      console.log(err)
    }

   
  }


  



 




  return (
    <>


      {/* <ProfileNav/> */}

      <div className='container'>
        <form action="">
          <div className="form-group mt-5 ">
            <label htmlFor="">Enter User Name</label>
            <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: "12px" }} placeholder="Enter title" />
          </div>
          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Password</label>
            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: "12px" }} placeholder="Enter author" />
          </div>

          <button className="btn btn-primary mt-3" type="button" onClick={sendDatatoApp} >Login</button>
        </form>

      </div>
    </>


  )
}

export default Login