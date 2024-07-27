import React, { useState } from 'react';
import '../Styles/HotelRooms.css';
import { Link } from 'react-router-dom';

const HotelRooms = () => {
  const roomsData = [
    {
      id: 1,
      title: "Deluxe Oceanview Suite",
      image: "luxury1.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "$600/per night",
      details: [
        { icon: "size.svg", text: "90m²" },
        { icon: "bed.svg", text: "1 King Size Bed" },
        { icon: "guest.svg", text: "2 Guests" }
      ]
    },
    {
      id: 2,
      title: "Luxury Grande Suite",
      image: "luxury2.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "$1200/per night",
      details: [
        { icon: "size.svg", text: "120m²" },
        { icon: "bed.svg", text: "1 King Size Bed" },
        { icon: "guest.svg", text: "2 Guests" }
      ]
    },
    {
      id: 3,
      title: "Premium Suite",
      image: "luxury3.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "$500/per night",
      details: [
        { icon: "size.svg", text: "95m²" },
        { icon: "bed.svg", text: "1 King Size Bed" },
        { icon: "guest.svg", text: "2 Guests" }
      ]
    },
    {
      id: 4,
      title: "Studio Apartment City View",
      image: "luxury4.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "$850/per night",
      details: [
        { icon: "size.svg", text: "120m²" },
        { icon: "bed.svg", text: "1 King Size Bed" },
        { icon: "guest.svg", text: "2 Guests" }
      ]
    },
    {
      id: 5,
      title: "Royal Luxury Sea View Suite",
      image: "luxury5.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "$1500/per night",
      details: [
        { icon: "size.svg", text: "90m²" },
        { icon: "bed.svg", text: "1 King Size Bed" },
        { icon: "guest.svg", text: "2 Guests" }
      ]
    },
    {
      id: 6,
      title: "Luxury Premium Suite",
      image: "luxury6.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: "$900/per night",
      details: [
        { icon: "size.svg", text: "120m²" },
        { icon: "bed.svg", text: "1 King Size Bed" },
        { icon: "guest.svg", text: "2 Guests" }
      ]
    }
  ];

  return (
    <div className="rooms-section">
      <div className="rooms-header">
        <h1>Explore Our Refined Accommodation Option <br />And Find The Perfect Space For Your Stay.</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point  <br />of using Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="rooms-grid">
        {roomsData.map((room) => {
          const [price, perNight] = room.price.split('/');

          return (
            <div className="room-card" key={room.id}>
              <img src={room.image} alt={room.title} />
              <div className="room-info">
                <h2>{room.title}</h2>
                <div className="room-details1">
                  {room.details.map((detail, index) => (
                    <span key={index} className="room-detail1">
                      <img src={detail.icon} alt="" className="detail-icon1" />
                      {detail.text}
                    </span>
                  ))}
                </div>
                <p>{room.description}</p>
                <div className="room-price">
                  <span className="price-amount">{price}</span>
                  <span className="price-per-night">/{perNight}</span>
                </div>
                <Link to={`/room/${room.id}`} className="room-button">Discover More <img src="./right.svg" alt="" /></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelRooms;
