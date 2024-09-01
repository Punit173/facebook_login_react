import React from "react";
import fbLogo from './assets/facebook.png'
import SignUp from "./SignUp";
import { Link, json } from "react-router-dom";
import { useState } from "react";


const Login = () => {
    const [name,setName] = useState('');
    const [password,setPass] = useState('');

    function update(e){
        setName(e.target.value);
    }

    function update1(e){
        setPass(e.target.value);
    }

    function check(){
        const data = JSON.parse(localStorage.getItem('Data'));
        console.log(data.email)
        console.log(name)
        if(data.email==name && data.password==password){
            alert("Login Successful!!");
        }
        else{
            alert("Invalid credentials!!");
        }
    }

    return(
        <>
        <div style={{
            display:"flex",
            placeItems:"center",
            placeContent:"center",
            height:"100%",
            width:"100%",
            alignContent:"space-between",
            gap:"100px"
        }}>
            <div style={{
                display:"flex",
                flexDirection:"column"
            }}>
                <img width={300} src={fbLogo} alt="" />
                <p style={{color:"black"}}>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"column",
                height:"49vh",
                width:"25vw",
                backgroundColor:"white",
                boxShadow: "2.1px 1.7px 1.4px rgba(0, 0, 0, 0.013),4.6px 3.9px 3.1px rgba(0, 0, 0, 0.02),7.8px 6.7px 5.3px rgba(0, 0, 0, 0.024),12.1px 10.3px 8.2px rgba(0, 0, 0, 0.028),17.9px 15.2px 12.2px rgba(0, 0, 0, 0.032),26.4px 22.3px 17.9px rgba(0, 0, 0, 0.036),39.5px 33.5px 26.8px rgba(0, 0, 0, 0.04),63px 53.4px 42.7px rgba(0, 0, 0, 0.047),118px 100px 80px rgba(0, 0, 0, 0.06)",
                borderRadius:"5px",
                placeContent:"center",
                placeItems:"center",
                gap:"10px"
            }}>
                <input style={{width:"20vw",borderRadius:"5px",padding:"20px",border:"1px solid black",backgroundColor:"white"}} onChange={update} value={name} type="text" placeholder="Email address or phone number" />
                <input style={{width:"20vw",borderRadius:"5px",padding:"20px",border:"1px solid black",backgroundColor:"white"}} type="password" onChange={update1} value={password} placeholder="Password" />
                <button onClick={check} style={{backgroundColor:"#0866ff",color:"white",width:"23vw",padding:"15px",fontSize:"20px"}}>Log in</button>
                <span style={{backgroundColor:"white",color:"black",width:"20vw",padding:"15px",borderBottom:"0.25px solid black"}}><a href="">Forgotten password?</a></span>
                <button style={{backgroundColor:"#42b72a",color:"white",width:"13vw",padding:"15px"}}><Link style={{textDecoration:"none",color:"white"}} to='/signup'>Create new account</Link></button>

            </div>
        </div>
        </>
    )
}

export default Login;