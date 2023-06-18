
import React, { useState } from 'react';

const SingleUser = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6; // Total number of slides
    const slidesToShow = 3; // Number of slides to show at a time
    const images = ['https://mentorathome.com/wp-content/uploads/2023/02/NCERT-Book-Class-8-Maths-1024x576.webp', 'https://cdn1.byjus.com/wp-content/uploads/2023/05/NCERT-Books-for-Class-10.png', 'https://mentorathome.com/wp-content/uploads/2023/02/NCERT-Book-Class-8-Maths-1024x576.webp', 'https://cdn1.byjus.com/wp-content/uploads/2023/05/NCERT-Books-for-Class-10.png', 'https://www.ncertbooks.guru/wp-content/uploads/2020/09/ncert-books-for-class-12-maths-chapter-1-relations-and-functions.jpeg', 'https://mentorathome.com/wp-content/uploads/2023/02/NCERT-Book-Class-8-Maths-1024x576.webp']; // Replace with your image URLs

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide >= totalSlides - slidesToShow ? 0 : prevSlide + 1));
    };

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - 1));
    };

    const visibleSlides = images.slice(currentSlide, currentSlide + slidesToShow);

    return (
        <div style={{}}>
            <div style={{ backgroundColor: 'lightblue', padding: '20px', width: "80%" , margin:"auto",borderRadius:"10px", borderTop:"20px" }}>
                <h1 style={{ color: "rgb(42, 41, 40) ", fontWeight: "bold", fontSize: "30px" , padding:"5px", border:"10px",  }}  >Start your learning journey from today. Best wishes!</h1>
            </div>
            <br/>

            <div  >
                <h1 style={{ textAlign: 'left', marginLeft: "170px", fontSize: "30px", fontWeight: "bold" }}>Achievements</h1>
                <div style={{ border: "1px solid yellow", width: "80%", backgroundColor: "rgb(212, 255, 189)", height: "200px", margin: "auto", borderRadius: "10px" }}>
                    <h1 style={{ color: "rgb(0, 158, 0) ", fontWeight: "bold", fontSize: "30px", marginTop: "35px" }}>Start a study Streak</h1>
                    <h2 style={{ color: "rgb(26, 187, 4) ", fontWeight: "bold", fontSize: "22px" }}>Steak help you to stay motivated and reach your goals. Start your streak today!</h2>
                </div>
            </div>
            <br /> <br />
            <div  >
                <h1 style={{ textAlign: 'left', marginLeft: "170px", fontSize: "30px", fontWeight: "bold" }}>Score</h1>
                <div style={{ border: "1px solid yellow", width: "80%", backgroundColor: "rgb(209, 255, 253)", height: "200px", margin: "auto", borderRadius: "10px" }}>
                    <h1 style={{ color: "rgb(2, 117, 159) ", fontWeight: "bold", fontSize: "30px", marginTop: "35px" }}>Start for a Score</h1>
                    <h2 style={{ color: "rgb(0, 112, 168) ", fontWeight: "bold", fontSize: "22px" }}>Score help you to stay motivated and reach your goals. See your Score today!</h2>
                </div>
            </div>

            <br />
            <br />

            <div  >
                <h1 style={{ textAlign: 'left', marginLeft: "170px", fontSize: "30px", fontWeight: "bold" }}>Recent</h1>
                <div style={{ border: "1px solid yellow", width: "80%", backgroundColor: "rgb(251, 255, 213)", height: "200px", margin: "auto", borderRadius: "10px" }}>
                    <h1 style={{ color: "rgb(219, 208, 0) ", fontWeight: "bold", fontSize: "30px", marginTop: "35px" }}>You have no sets yet!</h1>
                    <h2 style={{ color: "rgb(242, 231, 15) ", fontWeight: "bold", fontSize: "22px" }}>
                        Sets you create here or study will display here!
                    </h2>
                </div>
            </div>

            <br />             <br />
            <br />
            <input type="text" />

            <div>

            </div>


            <div className="slider" style={{ display: "flex", width: '510px', height: "300px", justifyContent: "space-between", gap: "10px" }} >

                <button style={{ border: "1px solid gray", borderRadius: "10px", backgroundColor: "rgb(241, 241, 241)", marginLeft: "20px", width: "60px" }} onClick={previousSlide}> Prev </button>
                {visibleSlides.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
                <button style={{ border: "1px solid gray", borderRadius: "10px", backgroundColor: "rgb(230, 230, 230)", marginRight: "20px", width: "60px" }} onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};



export default SingleUser;
