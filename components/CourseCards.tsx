'use client'
import React, { useState } from 'react';
import {ProfileReview} from '@/components/ProfileReview'


interface Props {
  title: string;
  points: string[];
  time: string;
  price: string;
  fakeprice: string;
  titledesc: string;
  reviewsCount: string;
  reviews: string[];
}

export function CourseCard({ fakeprice,title, points, time, price, titledesc, reviews,reviewsCount}:Props){
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showReviews,setReviews] = useState(false);
  const noPoints=points[0]=="" ? true: false;
  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  const toggleReviews = () => {
    setReviews(!showReviews);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
      <div className="content-section flex-grow">
        <div className="title-section">
          <h2 className="text-xl font-bold text-sm pb-2">{title}</h2>
        </div>
        <div className="text-gray-700 font-light italic">{titledesc}</div>
        <div className="points-section mb-2 pt-3">
		 
         <ul className={`${!noPoints && 'list-disc'} pl-5`}>
              {points.map((point: string, index:number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
        </div>
      </div>
	<div className="flex justify-between pt-4">
  <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 mt-0.5" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">

  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
	  <p>{time}hrs </p>
  </div>
    <div className="text-yellow-400">
    <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mt-[0.25rem] mr-0.5" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mr-0.5 mt-[0.25rem]" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mr-0.5 mt-[0.25rem]" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mr-0.5 mt-[0.25rem]" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mr-0.5 mt-[0.25rem]" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> 
</svg>
  <div className="text-black pl-1">(</div><button onClick={toggleReviews} className="text-black underline underline-offset-1">{reviewsCount} reviews</button><div className="text-black">)</div>
  </div> 
	</div>
  {showReviews && (
       <div className="relative"> 
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-transparent backdrop-blur-md">
          <div className="bg-white p-6 rounded shadow-md w-96 md:w-1/2">
            <p className="text-lg font-bold flex justify-center pb-2">Reviews</p>
            <ul>
              {reviews.map((review,index) => (
                <ProfileReview key={index} review={review} name="name" />
              ))}
            </ul>
            <button onClick={toggleReviews} className="flex justify-center mt-4">
              Show less...
            </button>
          </div>
        </div>
        </div>
      )}

    </div>
      <hr className="my-4 border-gray-300" />
      <div className="bottom-section flex justify-between items-end ">
        <div className="price-section flex">
          <p className="text-gray-400 mb-1 mr-2">
            <span className="line-through decoration-red-500">€{fakeprice}</span>
          </p>
          
          <p className="text-black font-semibold">€{price}</p>
        </div>
                <div className="add-to-cart-section">
          {
          <button
            className='flex bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 px-4 py-2 rounded focus:outline-none transition hover:bg-gray-400 text-white font-semibold shadow-xl shadow-cyan-500' 
            onClick={handleAddToCart}
          >
            Buy now
          </button>
          }
        </div> 
      </div>
    </div>
  );
};

export default CourseCard;


