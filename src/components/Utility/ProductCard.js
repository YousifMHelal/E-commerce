import React from 'react'
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'

const ProductCard = ({ product }) => {
    return (
        <div className='py-8 w-[205px] max-md:w-[150px] h-[480px] p-2 bg-white shadow-md mt-2 cursor-pointer'>
            <img src={product.img} alt='' />
            <div>
                <span className='text-[13px] capitalize inline-block'>{product.name}</span>
                <span className='text-[14px] uppercase text-p block'>{product.info}</span>
                <strong className='text-xl tracking-wider'>{product.price}</strong><sup>&#36;</sup>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='uppercase text-xs text-p'>{product.offer}% off</div> <span className='flex items-center bg-yellow-400 px-2 rounded-full text-xs text-white'>{product.rate} <AiFillStar className='text-xs text-white' /></span>
            </div>
            <div className='flex justify-between mt-3 px-2 text-xl cursor-pointer'>
                <AiOutlineShoppingCart />
                <AiFillHeart />
            </div>
        </div>
    )
}

export default ProductCard
