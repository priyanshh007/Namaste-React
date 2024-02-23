import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlneStatus";

const Header=()=>{
 const[btnname,setbtnname]=useState("Login");

  const onlineStatus=useOnlineStatus();

    return <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                     <li>online status:{onlineStatus?"✅":"🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contacts"}>Contact</Link></li>
                    <li><Link to={"/"}>Carts</Link></li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <button className="login-btn" onClick={()=>{
                      btnname=="login"?setbtnname("Logout"):setbtnname("login")} }>
                      {btnname}
                    </button>
                </ul>
            </div>
            </div>
    }

    export default Header;