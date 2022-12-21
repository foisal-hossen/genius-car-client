import React from 'react';
import './bannarItem.css'

const BannarItem = ({ slide }) => {
  const { image,id,prev,next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img src={image } alt=" " className="w-full rounded-lg" />
    </div>
    
<div className="absolute flex justify-between transform -translate-y-1/2 left-24   top-1/4">
      <h1 className='text-5xl font-bold text-white'>Affordable <br />
        Price For Car <br />
        Servicing
      </h1>
    </div>
    <div className='absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 '>
    <p className="text-xl text-white font-semibold">There are many variations of passages of  <br /> available, but the majority have suffered alteration in some form</p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
    <button className="btn btn-success mr-5">Success</button>
    <button className="btn btn-outline btn-secondary">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}` } className="btn btn-circle font-bold bg-transparent border-transparent hover:text-yellow-300 hover:bg-blue-700 mr-5">❮</a> 
  <a href={`#slide${next}` } className="btn btn-circle font-bold bg-transparent border-transparent hover:text-yellow-300 hover:bg-blue-900 mr-5">❯</a>
</div>
</div>
  );
};

export default BannarItem;