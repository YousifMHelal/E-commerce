import React from 'react'
import { SiAdidas, SiHp, SiHuawei, SiLenovo, SiLg, SiNike, SiPuma, SiSamsung, SiSony, SiXiaomi } from 'react-icons/si'

const Brands = () => {
    return (
        <div className='container mx-auto max-w-[1370px] px-2'>
            <div className='py-8 mt-8 flex items-center justify-between flex-wrap 
            text-7xl text-light-h dark:text-dark-h max-xl:justify-center'>
                <SiSamsung className='m-4 cursor-pointer' />
                <SiXiaomi className='m-4 cursor-pointer' />
                <SiLenovo className='m-4 cursor-pointer' />
                <SiSony className='m-4 cursor-pointer' />
                <SiAdidas className='m-4 cursor-pointer' />
                <SiNike className='m-4 cursor-pointer' />
                <SiPuma className='m-4 cursor-pointer' />
                <SiHp className='m-4 cursor-pointer' />
                <SiHuawei className='m-4 cursor-pointer' />
                <SiLg className='m-4 cursor-pointer' />
            </div>
        </div>
    )
}

export default Brands
