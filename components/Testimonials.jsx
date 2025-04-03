import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing quality and fast delivery! I will definitely shop again.",
    rating: 5,
    image: "https://i.pravatar.cc/60?img=1", // Random avatar
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great customer service and the product exceeded my expectations.",
    rating: 4.5,
    image: "https://i.pravatar.cc/60?img=2", // Random avatar
  },
  {
    id: 3,
    name: "Mark Wilson",
    review: "Good experience overall, but shipping took a bit longer than expected.",
    rating: 4,
    image: "https://i.pravatar.cc/60?img=3", // Random avatar
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-32">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, review, rating, image }) => (
          <div key={id} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <img src={image} alt={name} width={60} height={60} className="rounded-full" />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{name}</h3>
            <p className="text-gray-600 text-sm mt-2">"{review}"</p>
            <div className="mt-4 flex justify-center">
              <StarRating rating={rating} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;