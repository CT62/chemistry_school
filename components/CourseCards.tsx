'use client'
import chem_image from '@/components/chemsitry_graphic2.png'
import React, { useState } from 'react';

interface Props {
  title: string;
  points: string[];
  time: string;
  price: string;
  fakeprice: string
}

const CourseCard = ({ fakeprice,title, points, time, price }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);


  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
      <div className="content-section flex-grow">
        <div className="title-section mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="points-section mb-2 pt-3">
         <ul className="list-disc pl-5">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
        </div>
      </div>
	<div className="pt-4">
	<p>🕓 {time}hrs </p>
	</div>
      <hr className="my-4 border-gray-300" />
      <div className="bottom-section flex justify-between items-end">
        <div className="price-section flex">
          <p className="text-gray-400 relative mr-4">
            <span className="line-through-text">{fakeprice}</span>
          </p>
          <p className="text-black font-semibold">{price}</p>
        </div>
        <style jsx>{`
          .line-through-text::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 50%;
            border-bottom: 1px solid red;
          }
        `}</style>
        <div className="add-to-cart-section">
          <button
            className={`bg-cyan-500 text-white px-4 py-2 rounded focus:outline-none transition duration-300 hover:bg-cyan-600 ${
              isAddedToCart ? 'bg-red-500' : ''
            }`}
            onClick={handleAddToCart}
          >
            {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
