import { Button } from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'
import style from "../Style/HomePage.module.css"
import Navbar2 from "../component/Navbar2"
import Footer from './Footer'

const Homepage = () => {
  return (
   <>
   <Navbar2 />

    <div>
      
      <div className={style.first}>
        <div>
        <img className={style.firstimg} src="https://images.prismic.io/quizlet-prod/6aa15201-1bbd-4bab-803d-93e7d2d4110e_Alt+Image+1+%281%29.png?auto=compress,format" alt="" />
       <img className={style.mobile} src="https://images.prismic.io/quizlet-prod/18a3a46a-b31f-41cb-b02c-ab857d3daa7d_MobileHero.png?auto=compress,format" alt="" />
       </div>
     <h1>The best digital flashcards and study tools
        
     </h1>
     <p>Join over 60 million students using Quizlet’s science-backed flashcards, practice tests and expert solutions to improve their grades and reach their goals.</p>
      <Button style={{backgroundColor:"#6e7aff",color:"white"}} className={style.btn}> Sign up for free</Button>
      </div>
      <div id={style.title}>
        <h1>90% of students who use Quizlet report receiving higher grades
</h1>
      </div>
      <div className={style.third}>
        <div>
            <h1>Memorize faster for free</h1>
            <p>Research shows that testing yourself with flashcards is more effective than rereading your notes. From math to medicine to modern languages, Quizlet is used by students in over 100 different subjects.</p>
            <Button style={{height:"60px",color:"white",backgroundColor:"#6e7aff"}} className={style.btn2}>Get Started</Button>
        </div>
        <div>
            <img src="https://images.prismic.io/quizlet-prod/31c85d7d-9e36-40a4-9fae-5027c355ddee_Flashcards-1.gif?auto=compress,format" alt="" />
        </div>
      </div>
      <h1 className={style.youhead}>See our Flashcards in action</h1>
      <div id={style.youtube1}>
        <ReactPlayer width="63%" style={{height:"200%"}}  id={style.youtube} url="https://youtu.be/E-wY2mJVlu0"/>
      </div>
      <div className={style.fourth}>
      <div>
            <img src="https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format" alt="" />
        </div>
        
        <div className={style.secondsection}>
            <h1>Yesterday’s commute, Today’s study session
</h1>
            <p>Study anywhere — even offline — with our iOS and Android apps. Your progress syncs across your phone and computer.

</p>
    <img className={style.android} src="https://i.imgur.com/oJNDGWl.png" alt="" />
        </div>
        
      </div>
      <div className={style.five}>

        <div>
            <Button style={{backgroundColor:"#ffcd1f"}}>Quizlet Plus</Button>

            <h1>Be ready for test day with Learn and Test , Give your Best</h1>

            <p>Go beyond memorization with different question types designed to help you really get it.</p>
            <div className={style.inner}>
                <img id={style.img1} src="https://quizlet-prod.cdn.prismic.io/quizlet-prod/8ec0178c-1b86-4698-b547-bcbe3e5172d4_learn.svg" alt="" />
                <div>
                <h1>Practice with Learn</h1>
                <p>Get instant feedback while practicing with multiple choice, true or false, written questions and more.</p>
                </div>
            </div>
            <div className={style.inner1}>
                <img id={style.img2} src="https://quizlet-prod.cdn.prismic.io/quizlet-prod/69eba793-2788-47dd-a8a7-e89d723edbe7_Test.svg" alt="" />
                <div>
                <h1>Begin a Test</h1>
                <p>Get a sense of your study progress by taking a practice test so you can feel prepared for your exam.</p>
                </div>
            </div>
            <div className={style.inner2}>
                <img id={style.img3} src="https://quizlet-prod.cdn.prismic.io/quizlet-prod/5364d9dd-a28d-41ca-a5d1-308c49aa0f49_Smart+Grading.svg" alt="" />
                <div>
                <h1>Get max results</h1>
                <p>94% of students who use Learn or Test say that Quizlet helps them get better grades.</p>
                </div>
            </div>
            <Button style={{backgroundColor:"#4255ff",color:"white",fontWeight:"bold"}}>Explore Learn and Test</Button>
        </div>

        <div>
            <img id={style.bigimg} src="https://images.prismic.io/quizlet-prod/23a19326-20bc-47c2-98d8-0534f8661b8c_LearnandTest-1.gif?auto=compress,format" alt="" />
             </div>
      </div>
      <div className={style.five}>
      <div>
            <img id={style.bigimg} src="https://images.prismic.io/quizlet-prod/f26af523-4f77-4676-9646-e437ab1e7062_homepageexpert2.gif?auto=compress,format" alt="" />
             </div>
        <div>
            <Button style={{backgroundColor:"#ffcd1f"}}>Quizlet Plus</Button>
            <h1>Get homework help with expert solutions</h1>

            <p>Quizlet expert solutions show you step-by-step approaches to solve tough problems. Find millions of solutions in your subjects.

</p>
            <div className={style.inner}>
                <img id={style.img1} src="https://quizlet-prod.cdn.prismic.io/quizlet-prod/0e684f93-8be7-46bc-b970-0ce888ba9bf7_Solutions.svg" alt="" />
                <div>
                <h1>Expert written</h1>
                <p>Each textbook solution is carefully written and double-checked by our team of experts.</p>
                </div>
            </div>
            <div className={style.inner1}>
                <img id={style.img2} src="https://quizlet-prod.cdn.prismic.io/quizlet-prod/86d561c3-c0c5-47b6-a75e-a3d85fc64709_Step+by+Step.svg" alt="" />
                <div>
                <h1>Step-by-step learning</h1>
                <p>Understand the concept, apply it to problems and gain the confidence you need for future homework questions.</p>
                </div>
            </div>
            <div className={style.inner2}>
                <img id={style.img3} src="https://quizlet-prod.cdn.prismic.io/quizlet-prod/d6cecb4b-2807-42e7-9d31-1d7f22c02987_Textbook+Solutions.svg" alt="" />
                <div>
                <h1>Thousands of textbooks</h1>
                <p>Find solutions for textbook problems in math, science, business and more.</p>
                </div>
            </div>
            <Button style={{backgroundColor:"#4255ff",color:"white",fontWeight:"bold"}}>Find your answer</Button>
        </div>

        
      </div>
      <div className={style.head}>
        <h1>What students love about Quizlet</h1>
      </div>
      <div className={style.six}>
        <div>
            <img src="https://images.prismic.io/quizlet-prod/8568c5a7-2554-43c5-81bf-322169240769_Image+%2812%29.png?auto=compress,format&rect=0,4,310,228&w=286&h=210" alt="" />
            <h1>“Quizlet has been supporting my success since high school. Flashcards available on the go are single-handedly getting me through university.”</h1>
            <p>Babalu, Senior, Medicine</p>
        </div>
        <div>
            <img src="https://images.prismic.io/quizlet-prod/17a32b86-e009-47f6-acb0-cdc8e89d35c4_06Sydney+1.png?auto=compress,format&rect=0,10,930,683&w=286&h=210" alt="" />
            <h1>“Learn mode is the best thing that's ever come out of Quizlet. It shows you terms in a way that makes it easiest to remember.”</h1>
            <p>Sydney, Sophomore, Biology</p>
        </div>
        <div>
            <img src="https://images.prismic.io/quizlet-prod/8160414d-ed6b-41ce-9654-18fc839916f6_oscar+and+owen+photo+for+us+homepage_fullsize+%281%29+1.png?auto=compress,format&rect=0,8,793,582&w=286&h=210" alt="" />
            <h1>"All our friends use Quizlet. It's a fun way to study and we feel more confident preparing for our midterms and finals."</h1>
            <p>Owen & Oscar, High School Sophomores</p>
        </div>
      </div>
      <div className={style.seven}>
        <div>
        <h2>TEACHERS</h2>
        <h1>Empower your Student</h1>
        <p>Engage and motivate all students with curriculum-based materials, in-class activities and at-home study tools on any topic. Quizlet is free for both you and your students to sign up.</p>
        <Button className={style.btn3} style={{backgroundColor:"#4255ff",color:"white",fontWeight:"bold"}}>Create a free account</Button>
       <div>
       <h6 >Download  our Teacher Guide</h6>
        <hr />
       </div>
        </div>
        <div className={style.lastimg}>
            <img src="https://images.prismic.io/quizlet-prod/d5b00568-a324-488f-b16b-44480144cb81_Image+for+Text+Callout+%283%29.png?auto=compress,format" alt="" />
        </div>
      </div>
    
    </div>
<Footer />
    </>
  )
}

export default Homepage
