import React, {useState} from "react";
import './Signup.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Signup(){

const [email, setEmail]=useState('');
const [num, setNum]=useState('');
const [password, setPassword]=useState('');
const [retype, setRetype]=useState('');
const navigate=useNavigate();

const handleSignup=(e)=>{

    e.preventDefault();

    const userData={email, password, num};

    const userPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
     
      if(email===''){
        alert('Email field is empty!');
    }
    else if(!userPattern.test(email)){
        alert('Invalid email Format!');
    }
    else if(num===''){
      alert('phone number field is empty!');
    }
    else if(num.length>14&&num.length<13){
        alert('Invalid phone number!');
    }
    else if(password===''){
        alert('Password field is empty!');
    }
    else if(password.length<6||password.length>30){
        alert('Invalid password!');
    }
   else if(retype===''){
        alert('retype password field is empty!');
    }
    else if(password!==retype){
        alert('Password and retypes password doesnt match!');
    }
    else{
        axios.post('http://localhost:5000/signup', userData)
        .then(response=>{
            console.log(userData);
            navigate('/main',{ state: { email } });
        }
        )
        .catch(err=>{
            console.log(`${err} error occurred!`);
        })
    }
    

}

    return (
        <>
<div className="signup_page">
    <div className="branding_img"><img id="img_branding" src="https://www.moneycrashers.com/wp-content/uploads/2018/12/great-online-shopping-sites.jpg"/></div>
    <div className="signup_main">
        
        <div className="signup_heading">Welcome to SwiftCart <span><ShoppingCartIcon/></span></div>
       
      
       <div className="emailfield"><span id="emailsym"><EmailIcon/></span><span id="emailname"><input type="text" id="emailtxt" Placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/></span></div>
       <div className="phonefield"><span id="phonesym"><PhoneIcon/></span><span id="phonename"><input type="text" id="phonetxt" Placeholder="Enter phone number with country code" onChange={(e)=>setNum(e.target.value)}/></span></div>
       <div className="passwordfield"><span id="passwordsym"><LockOpenIcon/></span><span id="passwordname"><input type="password" id="passwordtxt" Placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/></span></div>
       <div className="passwordfield"><span id="passwordsym"><LockOpenIcon/></span><span id="passwordname"><input type="password" id="passwordtxt" Placeholder="Retype your password" onChange={(e)=>setRetype(e.target.value)}/></span></div>
       <div className="signupbtn"><button id="btnsignup" onClick={handleSignup}>Signup</button></div>
       <div className="loginroute">If you have already signed up then please <a href="http://localhost:3000/login"><button id="routelogin">click here</button></a></div>
    </div>
</div>

        </>
    )

}

export default Signup;