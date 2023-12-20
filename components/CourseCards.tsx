import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { checkout } from "../checkout"
import Link from 'next/link';
import Star from './star';
import StarFill from './star-fill';
import StarHalf from './star-half';

interface Props {
  title: string;
  points: string[];
  time: string;
  price: string;
  fakeprice: string;
  titledesc?: string;
  reviewsCount: string;
  stars: number;
  courseID: string;
}

export function CourseCard({
  fakeprice,
  title,
  points,
  time,
  price,
  titledesc,
  reviewsCount,
  stars,
  courseID,
}: Props) {
  const [isClient, setIsClient] = useState(false);
  const noPoints = points[0] === '';
  const prices = ["price_1OPUpgF7RC2rD4L0iW3TPHTH","price_1OPUrMF7RC2rD4L08cHt5S2I","price_1OPUswF7RC2rD4L0eBe4DZc0","price_1OPUuQF7RC2rD4L0P9EDvddY","price_1OPUuvF7RC2rD4L0lDnw9Gg1","price_1OPUvLF7RC2rD4L03P5KCFWZ","price_1OPUwBF7RC2rD4L01HKIsyjM"];

  useEffect(() => {
    setIsClient(true);
    let storedIsPurchased = localStorage.getItem(`isPurchased${courseID}`);
    if (storedIsPurchased === undefined || storedIsPurchased === null) {
      localStorage.setItem(`isPurchased${courseID}`, 'false');
    }
  }, []);

  const handlePurchase = () => {
    checkout({
      lineItems: [
        {
          price: prices[parseInt(courseID)],
          quantity: 1,
        }
      ]
    })
    const isPurchased = localStorage.getItem(`isPurchased${courseID}`) === 'true';
    localStorage.setItem(`isPurchased${courseID}`, isPurchased ? 'false' : 'true');
  };

  const renderStars = (count: number) => {
   const starElements: JSX.Element[] = [];
   const fullStars = Math.floor(count);
   const hasHalfStar = count % 1 !== 0;

   for (let i = 0; i < fullStars; i++) {
     starElements.push(<StarFill key={i} />);
   }

   if (hasHalfStar) {
     starElements.push(<StarHalf key="half-star" />);
   }

   const remainingStars = hasHalfStar ? 4 - fullStars : 5 - fullStars;
   for (let i = 0; i < remainingStars; i++) {
     starElements.push(<Star key={i} />);
   }

   return starElements;
}; 
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col">
      <div className="content-section flex-grow">
        <div className="title-section">
          <h2 className="text-xl font-bold text-sm pb-2">{title}</h2>
        </div>
        <div className="text-gray-700 font-light italic">{titledesc}</div>
        <div className="points-section mb-2 pt-3">
          <ul className={`${!noPoints && 'list-disc'} pl-5`}>
            {points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 mt-0.5" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <p>{time}hrs </p>
        </div>
        <div className="flex text-yellow-400">
          {renderStars(stars)?.map((starin, index) => (
            <div key={index}>{starin}</div>
          ))}
          <div className="text-black pl-1">
            (
            <Link href={`/courses/${courseID}`} className="text-black underline underline-offset-1">
              {reviewsCount} reviews
            </Link>
            )
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="bottom-section flex justify-between items-end ">
        <div className="price-section flex">
          <p className="text-gray-400 mb-1 mr-2">
            <span className="line-through line-through decoration-red-500">€{fakeprice}</span>
          </p>
          <p className="text-black font-semibold">€{price}</p>
        </div>
        <div className="add-to-cart-section">
          <button
            className={`flex ${isClient && localStorage.getItem(`isPurchased${courseID}`) === 'false' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-green-400'} shadow-md text-gray-900 px-4 py-2 rounded focus:outline-none transition text-white font-semibold`}
            onClick={handlePurchase}
          >
            {isClient && localStorage.getItem(`isPurchased${courseID}`) === 'false' && <p>Buy now</p>}
            {isClient && localStorage.getItem(`isPurchased${courseID}`) === 'true' && <p>Purchased</p>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
