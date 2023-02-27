//import { useRef, useState, useEffect, useContext } from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Login.module.css";
import LogoImage from "../assets/images/logo.png";
import classNames from "classnames";
//import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const LOGIN_URL = "/users/login";

function Login() {
  const { setAuth }= useAuth(); //useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const returnURL = location.state?.from?.pathname;
  let defaultURL = "/dashboard";
  
  const userRef = useRef();
  const errRef = useRef();

  const [emailSelected, setEmailSelected] = useState(false);
  const [passwordSelected, setPasswordSelected] = useState(false);

  const [user, setUser]=useState('');
  const [pword, setPword] = useState('');
  const [errMsg, setErrMsg] = useState('invalid user');
  // const [success, setSuccess] = useState(false);  

  useEffect(() => {
    userRef.current.focus();
  },[]);
  
  useEffect(() => {
    setErrMsg('');
  },[user,pword]);

  const myFunction = () => {
    var x = document.getElementById("floatField2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    //console.log(from);
    try{
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email_LoginID:user,password:pword}),
        {
          headers:{
            "Content-Type": "application/json"
          },
          //withCredentials: true
        }
      );
      
      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;
      setAuth({user, pword, roles, accessToken});
      //
      setUser('');
      setPword('');
      // setSuccess(true);
      //navigate('/dashboard');
      if(returnURL==="/" || returnURL===""){
        navigate(defaultURL, {replace: true});        
      }else{
        navigate(returnURL, {replace: true});        
      }      
      
    }catch(err){
      if(!err?.response){        
        setErrMsg("No server response");
      }else if(err.response?.status===400){
        setErrMsg("Invalid user email or password");
      }else if(err.response?.status===401){
        setErrMsg("Unauthorized");
      }else{
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }    
  }

  return (
    <div className={classes.loginbase}>
      <div className={classes.main}>
        <div className={classes.logo_login}>
          <img src={LogoImage} alt="" />
        </div>
        <div className={classes.login_area}>
          <div className={classes.login_box}>
            <p ref={errRef} className={errMsg?classes.errMsg:classes.offscreen}>{errMsg}</p>
            <h2>Sign In</h2>
            <form onSubmit={onSubmitHandler}>
            <ul className={classes.steps}>
              <li>
                <input
                  type="radio"
                  id="police"
                  name="customInfo"
                  value="Police"
                />
                <label htmlFor="police">Police</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hospital"
                  name="customInfo"
                  value="Hospital"
                />
                <label htmlFor="hospital">Hospital</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="auditor"
                  name="customInfo"
                  value="Auditor"
                />
                <label htmlFor="auditor">Auditor</label>
              </li>
            </ul>
            <ul className={classes.formArea}>
              <li>
                <div id="floatContainer" className={classNames(classes.float_container, emailSelected?classes.activebor:"")}>
                  <label htmlFor="floatField">Email Address</label>
                  <input type="text" name="name" ref={userRef} id="floatField" 
                  onChange={(e) => setUser(e.target.value)}
                  onFocus={()=>{setEmailSelected(true)}} 
                  onBlur={()=>{setEmailSelected(false)}}
                  value={user}
                  required />
                </div>
              </li>
              <li>
                <div id="floatContainer2" className={classNames(classes.float_container2, passwordSelected?classes.activebor2:"")}>
                  <button type="button" className={classes.showPass} onClick={myFunction}>
                    Show
                  </button>
                  <label htmlFor="floatField2">Password</label>
                  <input type="password" name="name" ref={errRef} id="floatField2" 
                  onChange={(e) => setPword(e.target.value)}
                  onFocus={()=>{setPasswordSelected(true)}} 
                  onBlur={()=>{setPasswordSelected(false)}}
                  value={pword}
                  required />
                </div>
              </li>
              <li>
                <div className={classes.other_req}>
                    <div className={classes.remember_me}> 
                        <input type="checkbox" id="horns" name="horns"/>
                        <label htmlFor="horns">Remember Me</label>
                    </div>
                    <div className={classes.forgot_pass}><Link to="#">Forgot Password?</Link></div>
                </div>
            </li>
            <li><button type="submit" 
            className={classNames(classes.btn, classes.btn_yello, classes.sign_in_btn)}>Sign In</button></li>
            </ul>
            </form>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
