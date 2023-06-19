import React, { useState } from 'react';
import "../Style/Navbar2.css"
import style from "../Style/Navbar.module.css"
import { Button, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'
import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const handelclick=()=>{
   let token=localStorage.getItem("token")
   if(token){
    navigate("/fleshcard")
   }else{
    alert("Please Login 😒")
   }
}
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src="https://i.imgur.com/LPlbA9y.png" alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
      <Dropdown className={style.subject}/>
        <h2  className="navbar-menu-item">Expert Solution</h2>
        <Input id="input" style={{
      width:"500px",marginTop:"-10px",
      borderRadius:"40px",
      backgroundColor:"#f6f7fb"
     }
     } placeholder='Study sets, textbooks, questions'/>
        <Button style={{backgroundColor:"#4255ff",padding:"12px",borderRadius:"50%",color:"white"}} className="navbar-menu-item"
        onClick={handelclick}
        >+</Button>
        <Link to="/login">
        <Button className="navbar-menu-item">Login</Button>
        </Link>
        <Link to="/signup">
        <Button style={{backgroundColor:"#ffcd1f",padding:"8px 15px 8px 15px",borderRadius:"10px",fontWeight:"500"}} className="navbar-menu-item">Signup</Button>
        </Link>
      </div>
      <div className={`navbar-hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar2;
