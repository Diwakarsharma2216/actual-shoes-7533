// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from "../Style/Dropdown.module.css"
// import { Link } from 'react-router-dom';
// const ButtonsWithImages = () => {
//   const [hoveredButton, setHoveredButton] = useState(null);

//   const handleMouseEnter = (buttonIndex) => {
//     setHoveredButton(buttonIndex);
//   };

//   const handleMouseLeave = () => {
//     setHoveredButton(null);
//   };

//   const buttonData = [
//     {
//       image: "https://i.imgur.com/NCTqOaH.png",
//       buttonText: 'Women Ethnic',
//       to:"/women"
//     },
//     {
//       image: 'https://i.imgur.com/S3biSP0.png',
//       buttonText: 'Women Western',
//       to:"/women"
//     },
//     {
//         image: "https://i.imgur.com/WQbgBEW.png",
//         buttonText: "Mens",
//         to:"/men"
//       },
//       {
//         image: 'https://i.imgur.com/u3t8Bbm.png',
//         buttonText: 'Kids',
//         to:"/kids"
//       },
//       {
//         image: "https://i.imgur.com/KixAtjL.png",
//         buttonText: 'Home & Kitchen',
//         to:"/home&kitchen"
//       },
//       {
//         image: 'https://i.imgur.com/yHsTgZE.png',
//         buttonText: 'Beauty & Health',
//         to:"/beauty"
//       },
//       {
//         image: "https://i.imgur.com/oMjIAEQ.png",
//         buttonText: 'Jewellery & Accessories',
//         to:"/jewellery"
//       },
//       {
//         image: 'https://i.imgur.com/G2DYYSF.png',
//         buttonText: 'Bags & Footwear',
//         to:"/footwear"
//       },
//       {
//         image: 'https://i.imgur.com/uRlw7xx.png',
//         buttonText: 'Electronics',
//         to:"/electronics"
//       },
//     // Add more button data objects here
//   ];

//   return (
//     <div id={style.drop}>
//       {buttonData.map((button, index) => (
//         <div
        
//           key={index}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//           style={{ display:"inline-block"}}
//         >
//           <button style={{ padding: '10px 20px',fontWeight:"400",marginLeft:"10px",marginTop:"-10px" }} className={style.hover}>{button.buttonText}</button>
//           {hoveredButton === index && (
//             <Link to={button.to}>
//             <img
//               src={button.image}
//               alt={`Image ${index + 1}`}
//               style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: '70%',
//                 marginTop:"10px",
//                 transform: 'translate(-50%, -10px)',
//             marginLeft:"-250px",
           
//               }}
//             />
//             </Link>
//           )}
         
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ButtonsWithImages;
import React, { useState } from 'react';

const Navbar = ({ handleHover ,handleMouseLeave}) => {
  return (
    <div className={style.navbar2} >
     <h1  style={{marginLeft:"0px",fontWeight:"500"}}onMouseLeave={handleMouseLeave} onMouseEnter={() => handleHover(1)}>Subject</h1>
      
    </div>
  );
};

const ImagePopup = ({ image }) => {
  return (
    <div >
      <img  src={image} alt="Big Image" style={{position:"absolute",width:"450px",height:"300px",marginLeft:"-20px",marginTop:"35px"}} />
    </div>
  );
};

const Navbar2 = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (buttonNumber) => {
    setHoveredButton(buttonNumber);
  };
  const handleMouseLeave = () => {
         setHoveredButton(null);
       };
    
  const getBigImage = () => {
    switch (hoveredButton) {
      case 1:
        return 'https://i.imgur.com/TfxOjLE.png';
     
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar handleHover={handleHover} handleMouseLeave={handleMouseLeave} />
      {hoveredButton && <ImagePopup image={getBigImage()}/>}
    </div>
  );
};

export default Navbar2;

