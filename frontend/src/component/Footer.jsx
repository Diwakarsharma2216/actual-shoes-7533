import React from 'react'
import style from "../Style/Footer.module.css" 
const Footer = () => {
  return (
    <div >
      
    <div className={style.footer}>
    <div>
      <h1>About us</h1>
      <p>About Quizlet</p>
      <p>How Quizlet Works</p>
      <p>Career</p>
      <p>Advertise With us</p>
      <p>Get the app</p>
    </div>
    <div><h1>For Students</h1>
    <p>Flashcards</p>
    <p>Learn</p>
    <p>Solutions</p>
    <p>Quizlet Plus</p>
    </div>
    <div><h1>For Teachers</h1>
    <p>Live Checkpoint</p>
    <p>Blog</p>
    <p>Be the Change</p>
    <p>Quizlet Plus for Teachers</p>
    </div>
    <div><h1>Resources</h1>
    <p>Help Center</p>
    <p>Signup</p>
    <p>Honor Code</p>
    <p>Community Guidelines</p>
    <p>Privacy</p>
    <p>Terms</p>
    <p>Ad and Cookie Policy</p>
    </div>
    <div><h1>Language</h1>
    <p>English</p>
    </div>
   
    </div>
     <div className={style.main}>
     <img src="https://i.imgur.com/ZSpo5eL.png" alt="xx" />
     <img src="https://assets.quizlet.com/a/j/dist/app/i/global/footer/coppa-seal.cdf1828279fe2a1.png" alt="" />
   </div>
   </div>
  )
}

export default Footer
