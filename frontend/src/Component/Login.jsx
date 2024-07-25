import React, {useState} from "react";
import './Login.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login(){

const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const navigate=useNavigate();

const handleLogin=()=>{

    const userData={email, password};

    axios.post('http://localhost:5000/login', userData)
    .then(response=>{
      navigate('/main', { state: { email } });
    })
    .catch(err=>{
        console.log(`error ${err} occurred!`);
    })

}

    return (
        <>
<div className="signup_page">
    <div className="branding_img"><img id="img_branding" src="https://www.moneycrashers.com/wp-content/uploads/2018/12/great-online-shopping-sites.jpg"/></div>
    <div className="signup_main">
        
        <div className="signup_heading">Welcome to SwiftCart <span><ShoppingCartIcon/></span></div>
       
      <div className="login_main">

       <div className="emailfield"><span id="emailsym"><EmailIcon/></span><span id="emailname"><input type="text" id="emailtxt" Placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/></span></div>
       <div className="passwordfield"><span id="passwordsym"><LockOpenIcon/></span><span id="passwordname"><input type="text" id="passwordtxt" Placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/></span></div>
       <div className="signupbtn"><button id="btnsignup" onClick={handleLogin}>Login</button></div>
    
       </div>
    
    </div>
</div>


        </>
    )

}

export default Login;