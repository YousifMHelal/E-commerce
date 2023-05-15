import React from 'react'
import product6 from '../assets/prouducts/product-6.avif'
import { AiFillStar } from "react-icons/ai";


const ProductInfo = () => {
  return (
    <div className='container mx-auto max-w-[1370px] mt-16 min-h-[100vh]'>
      <div className='flex justify-around max-md:flex-col max-md:items-center'>
        <img
          className='w-[350] h-[500px]'
          src={product6} alt='product' />
        <div className='w-[600px] p-8 shadow-md rounded-lg border-2 flex flex-col'>
          <h2 className='text-2xl font-semibold tracking-widest mt-8 '>Samsung Galaxy A13 Black</h2>
          <h3 className='text-xl tracking-wider mt-2 text-p'>64GB 4GB 4G LTE EGYTP</h3>
          <p className='text-3xl font-bold mt-12 tracking-widest' >1250<sup>&#36;</sup></p>
          <div className="flex items-center mt-4">
            <div className="uppercase text-xl mr-8 text-p">10% off</div>{" "}
            <span className="flex items-center bg-yellow-400 px-2 rounded-full text-xs text-white">
              4.5<AiFillStar className="text-xl text-white" />
            </span>
          </div>
          <button className='py-2 px-16 m-auto mt-16 w-fit rounded-xl text-white bg-main text-3xl tracking-wider capitalize'>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
