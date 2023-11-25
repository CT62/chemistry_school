'use client'
import Link from 'next/link'
import useGlobalCartState from '@/app/contexts/GlobalCartState';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
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

export function CourseCard({ fakeprice,title, points, time, price, titledesc, reviewsCount, stars, courseID}:Props){
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const {count,setCount} = useGlobalCartState();
  const noPoints=points[0]=="" ? true: false;
  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
    localStorage.setItem(`isAddedToCart${courseID}` , isAddedToCart.toString());
    console.log(localStorage.getItem(`isAddedToCart${courseID}`)) 
    if(isAddedToCart){
      setCount((prevCount) => prevCount - 1);
    }else{
      setCount((prevCount) => prevCount + 1);
    }
    console.log(count)
  };

  const renderStars =(count: number)=> {
    let starElements: JSX.Element[] = [];
    if(count % 1 !==0){
      for(let i=0; i<Math.floor(stars); i++){
        starElements.push(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
              )}

      starElements.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>)
      for(let i=0; i<4-Math.floor(stars); i++){
        starElements.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
          )
      }
    }
    else{
      for(let i=0; i<count; i++){
        starElements.push(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
        )
      }
      for(let i=0; i<5-count; i++){
        starElements.push(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
        )
      }
    } 
    return starElements;
    }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col shadow-xl shadow-cyan-500">
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
    <div className="flex">
    {renderStars(stars)?.map((star,index) =>(
          <div key={index}>{star}</div>
    ))}
  <div className="text-black pl-1">(</div><Link href={`/courses/${courseID}`} className="text-black underline underline-offset-1">{reviewsCount} reviews</Link><div className="text-black">)</div>
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
            className='flex bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 px-4 py-2 rounded focus:outline-none transition hover:bg-gray-400 text-white font-semibold' 
            onClick={handleAddToCart}
          >
          {localStorage.getItem(`isAddedToCart${courseID}`)=="false" && (
            <p>Add To Cart</p>
          )}
          {localStorage.getItem(`isAddedToCart${courseID}`)=="true" &&(
            <p>Remove From Cart</p>
          )}
          </button>
        </div> 
      </div>
    </div>
  );
};

export default CourseCard;


