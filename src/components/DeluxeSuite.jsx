// import React from 'react';
// // import './DeluxeSuite.css';

// const roomData = {
//   id: 1,
//   title: "Deluxe Oceanview Suite",
//   images: [
//     "/luxury1.jpg",  // Main image
//     "/bathroom.jpg",  // Bathroom image
//     "/sofa.jpg"  // Sofa image
//   ],
//   description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   details: [
//     { icon: "/size.svg", text: "95 m²" },
//     { icon: "/bed.svg", text: "1 King Size Bed" },
//     { icon: "/guest.svg", text: "2 Guests" }
//   ]
// };

// const PremiumSuite = () => {
//   return (
//     <div className="room-detail">
//       <div className="room-images">
//         <img src={roomData.images[0]} alt="Main view" className="main-image" />
//         <div className="thumbnail-images">
//           {roomData.images.slice(1).map((img, index) => (
//             <img key={index} src={img} alt={`Thumbnail ${index}`} className="thumbnail" />
//           ))}
//         </div>
//       </div>
//       <h1>{roomData.title}</h1>
//       <div className="room-details">
//         {roomData.details.map((detail, index) => (
//           <span key={index} className="room-detail-item">
//             <img src={detail.icon} alt="" className="detail-icon" />
//             {detail.text}
//           </span>
//         ))}
//       </div>
//       <p>{roomData.description}</p>
//     </div>
//   );
// };

// export default PremiumSuite;
