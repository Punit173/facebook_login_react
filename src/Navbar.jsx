import React from "react";
import { Link } from "react-router-dom";
import './index.css'
import fbLogo from './assets/download.png'

import './App.css'

const Navbar = () => {
    return(
        <>
            <div style={{display:"flex",width:"100%",placeContent:"center"}}>
                <img width={50} src={fbLogo} alt="" />
                <button><Link to='/'>Login</Link></button>
                <button><Link to='/signup'>SignUp</Link></button>
            </div>
        </>
    )
}

export default Navbar;