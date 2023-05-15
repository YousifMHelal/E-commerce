import React from 'react'
import { BsCart4, BsFillCalendarHeartFill, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        // -----NavBar----
        <div className='w-full bg-slate-700 text-white'>
            <nav className='container mx-auto max-w-[1370px] px-2 py-2 flex items-center max-md:py-2'>
                {/* -----Logo----- */}
                <Link to='/' className='font-bold text-xl tracking-widest py-2 uppercase mr-8 max-md:hidden flex'>Ecommerce</Link>
                <input
                    className='w-full py-1 px-2 rounded mx-4 outline-none text-p max-md:text-sm'
                    placeholder={`What're you looking for ?`}
                    type='text' />
                <Link to='/signin' className='cursor-pointer ml-4 pr-4 w-[90px] flex items-center hover:opacity-50 max-md:w-fit max-md:ml-0'>
                    <h4 className='text-md max-md:hidden'>Signin</h4>
                    <BsPerson className='ml-2 w-[20px] max-md:text-center max-md:ml-0' />
                </Link>
                <Link to='/wishlist' className='cursor-pointer flex w-[200px] items-center px-4 border-l-2 border-r-2 border-white/30 hover:opacity-50 max-md:w-fit'>
                    <h4 className='text-md max-md:hidden'>WishList</h4>
                    <BsFillCalendarHeartFill className='ml-2 w-[20px] max-md:text-center max-md:ml-0' />
                </Link>
                <Link to='/cart' className='cursor-pointer pl-4 w-[75px] flex items-center hover:opacity-50 max-md:w-fit'>
                    <h4 className='text-md max-md:hidden'>Cart</h4>
                    <BsCart4 className='ml-2 w-[20px] max-md:text-center max-md:ml-0 max-md:mr-2 relative' />
                    <div className='h-[15px] w-[15px] rounded-full bg-red-600 right-[67px] text-xs top-[27px] text-center absolute
                    max-md:right-[4px] max-md:top-[22px] max-xl:top[22px] max-2xl:right-[4px] max-2xl:top-[28px]'>1</div>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
