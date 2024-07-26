import React from 'react';
import './ReviewsList.css';

const reviews = [
  {
    id: 1,
    name: "Alexa Mate",
    avatar: "/Mate.jpg",
    rating: 5,
    title: "Fabulous Hotel, I Really Like It 😍",
    review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    id: 2,
    name: "Johnson Willions",
    avatar: "/Johnson.jpg",
    rating: 5,
    title: "I am very happy with this room and staff behaviour",
    review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];

const Review = ({ name, avatar, rating, title, review }) => (
  <div className="review">
    <div className="review-header">
      <img src={avatar} alt={name} className="review-avatar" />
      <div>
        <h3 id='nameId'>{name}</h3>
        <div className="stars">{'★'.repeat(rating)}</div>
      </div>
    </div>
    <div className="review-body">
      <h4 id='reviewH4'>{title}</h4>
      <p id='reviewP'>{review}</p>
    </div>
    <div className="line2"></div>
    </div>

);

const ReviewsList = () => (
  <div className="reviews">
   <div className='review2'>
    <h2 id='Customer'>Customer Reviews</h2>
    {reviews.map(review => (
      <Review key={review.id} {...review} />
    ))}
   </div>
  </div>
);

export default ReviewsList;
