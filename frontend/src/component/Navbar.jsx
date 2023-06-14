import React from 'react'
import style from "../Style/Navbar.module.css"
import { Button, Input } from '@chakra-ui/react'
import {Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">
      <img src="https://i.imgur.com/LPlbA9y.png" alt="" />
      </Link>
      <h1>Subject</h1>
      <h2>Expert Solution</h2>
     <Input style={{
      width:"500px",marginTop:"15px",
      borderRadius:"40px",
      backgroundColor:"#f6f7fb"
     }
     } placeholder='Study sets, textbooks, questions'/>
     <Button id={style.btn2}>+</Button>
     <div className={style.hide} ><p >Create</p></div>
    <Link to="/login">
     <Button className={style.btn}>Log in</Button>
     </Link>
     <Link to="/signup"> 
     <Button className={style.btn1}>Sign up</Button>
     </Link>
    </div>
  )
}
