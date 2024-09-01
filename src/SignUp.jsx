import React from "react";
import fbLogo from './assets/facebook.png'
import { useState } from "react";

const SignUp = () => {

    const [name,useName] = useState('');
    const [email,setMail] = useState('');
    const [password,setPass] = useState('');
    const [confpassword,setPass1] = useState('');

    function update1(e){
        useName(e.target.value);    
    }
    function update2(e){
        setMail(e.target.value);
    }
    function update3(e){
        setPass(e.target.value);
    }
    function update4(e){
        setPass1(e.target.value);
    }

    var obj = {
        name:name,
        email:email,
        password:password,
        confpassword:confpassword
    }

    function check(){
        if(password==confpassword){
            localStorage.setItem('Data',JSON.stringify(obj));
            alert('Registered Successfully!!');
        }
        else{
            alert("Password does not match!!");
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
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"column",
                height:"55vh",
                width:"30vw",
                backgroundColor:"white",
                boxShadow: "2.1px 1.7px 1.4px rgba(0, 0, 0, 0.013),4.6px 3.9px 3.1px rgba(0, 0, 0, 0.02),7.8px 6.7px 5.3px rgba(0, 0, 0, 0.024),12.1px 10.3px 8.2px rgba(0, 0, 0, 0.028),17.9px 15.2px 12.2px rgba(0, 0, 0, 0.032),26.4px 22.3px 17.9px rgba(0, 0, 0, 0.036),39.5px 33.5px 26.8px rgba(0, 0, 0, 0.04),63px 53.4px 42.7px rgba(0, 0, 0, 0.047),118px 100px 80px rgba(0, 0, 0, 0.06)",
                borderRadius:"5px",
                placeContent:"center",
                placeItems:"center",
                gap:"15px"
            }}>
                <input style={{width:"20vw",borderRadius:"5px",padding:"20px",border:"1px solid black",backgroundColor:"white"}} onChange={update1} value={name} type="text" placeholder="Name" />
                <input style={{width:"20vw",borderRadius:"5px",padding:"20px",border:"1px solid black",backgroundColor:"white"}} onChange={update2} value={email} type="email" placeholder="Email address" />
                <input style={{width:"20vw",borderRadius:"5px",padding:"20px",border:"1px solid black",backgroundColor:"white"}} onChange={update3} value={password} type="password" placeholder="Password" />
                <input style={{width:"20vw",borderRadius:"5px",padding:"20px",border:"1px solid black",backgroundColor:"white"}} onChange={update4} value={confpassword} type="password" placeholder="Confirm Password" />
                <button onClick={check} style={{backgroundColor:"#0866ff",color:"white",width:"23vw",padding:"15px",fontSize:"20px"}}>Sign Up</button>

            </div>
        </div>
        </>
    )
}

export default SignUp;