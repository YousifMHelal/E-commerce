import React, {  useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import product1 from '../../assets/slider/product-1.png'
import product2 from '../../assets/slider/product-2.jpg'
import product3 from '../../assets/slider/product-3.jpg'
import product4 from '../../assets/slider/product-4.png'
import product5 from '../../assets/slider/product-5.png'


const Slider = () => {
    const arr = [product1, product2, product3, product4, product5];

    const [value, setValue] = useState(0);

    // -----Prev img button-----
    const prevImg = () => {
        const isFisrstSlide = value === 0;
        const newIndex = isFisrstSlide ? arr.length - 1 : value - 1
        setValue(newIndex)
    }

    // -----Next img button-----
    const nextImg = () => {
        const isLastSlide = value === arr.length - 1;
        const newIndex = isLastSlide ? 0 : value + 1;
        setValue(newIndex)
    }
    // -----Move slider auto-----
    // useEffect(() => {
    //     setTimeout(() => {
    //         const isLastSlide = value === arr.length - 1;
    //         const newIndex = isLastSlide ? 0 : value + 1;
    //         setValue(newIndex)
    //     }, 5000)
    // }, [value])

    // -----Move slider by dots-----
    const moveDot = (index) => {
        setValue(index);
    }

    return (
        <div className='w-full h-[480px] max-md:h-[300px] relative group'>
            <img
                src={`${arr[value]}`} alt=''
                className='w-full h-full bg-center bg-cover duration-1000 ' />
            {/* -----arrows----- */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
            left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer p-1 duration-500'>
                <BsChevronCompactLeft onClick={prevImg} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
            right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer p-1 duration-500'>
                <BsChevronCompactRight onClick={nextImg} size={30} />
            </div>
            {/* ----Dots----- */}
            <div className='absolute left-[50%] bottom-5 translate-x-[-50%]  flex justify-center'>
                {
                    arr.map((img, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => moveDot(i)}  
                                className='w-[20px] h-[5px] rounded bg-black/20 cursor-pointer duration-500 mx-1 overflow-hidden'>
                                <div
                                    className={value === i ? 'w-full h-full bg-main' : 'hidden'}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider
