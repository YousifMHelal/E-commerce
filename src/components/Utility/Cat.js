import React from 'react'


const Cat = ({ cat }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[130px] h-[130px] shadow-xl rounded-full overflow-hidden bg-[#EEEEEE] mx-2 my-2'>
                <img
                    className='object-cover w-full h-full bg-center'
                    src={cat.img} alt={cat.name}></img>
            </div>
            <h2 className='pt-2 font-bold capitalize'>{cat.name} </h2>
        </div>
    )
}

export default Cat