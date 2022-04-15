

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProfileNav from "./ProfileNav"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Register(props) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');


  const [msg, setMsg] = useState('');



  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");


  const notify = () => toast(msg);

  console.log(msg)


  const navigate = useNavigate();

  const sendDatatoApp = async () => {

    setLoading(true)


    let x;
    try {
      x = await axios.post('http://localhost:5000/api/users/register-user', { fullname, email, username, mobile, password, address, password_confirmation }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
        }
      })
      setLoading(false)
      console.log(x.data.success, 'success')
    } catch (er) {
      setLoading(false)
      setMsg(er.response.data.message.msg)
      notify()

      console.log(er.response.data.message.msg)

    }

    if (x.data.success) {
      navigate('/login')

    }
    else {
      setLoading(false)
      navigate('/register')
    }

  }


  return (
    <>
      <ToastContainer />
      <ProfileNav />

      


     {loading == true ?
     <div className="sweet-loading">

     <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>

    :
    <div className='container'>
    <form action="">
      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Full Name</label>
        <input className="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Full Name" />
      </div>
      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Email</label>
        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Email" />
      </div>
      <div className="form-group mt-5 ">
        <label htmlFor="">Enter User Name</label>
        <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: "12px" }} placeholder="Enter User Name" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Mobile</label>
        <input className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Mobile" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Password</label>
        <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Password" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Address</label>
        <input className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Address" />
      </div>

      <div className="form-group mt-5 ">
        <label htmlFor="">Enter Confirm Password</label>
        <input className="form-control" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} style={{ margin: "12px" }} placeholder="Enter Confirm Password" />
      </div>

     
      <button className="btn btn-primary mt-3" type="button" onClick={sendDatatoApp} >Register</button>
    </form>

  </div>
    
    }



    </>


  )
}

export default Register