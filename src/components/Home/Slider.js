import React, {  useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import product1 from '../../assets/slider/slide-1.png'
import product2 from '../../assets/slider/slide-2.png'
import product3 from '../../assets/slider/slide-3.png'
import product4 from '../../assets/slider/slide-4.png'
import product5 from '../../assets/slider/slide-5.png'


const Slider = () => {
    const arr = [product1, product2, product3, product4, product5];

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // -----Prev img button-----
    const prevImg = () => {
        const isFisrstSlide = currentPhotoIndex === 0;
        const newIndex = isFisrstSlide ? arr.length - 1 : currentPhotoIndex - 1
        setCurrentPhotoIndex(newIndex)
    }

    // -----Next img button-----
    const nextImg = () => {
        const isLastSlide = currentPhotoIndex === arr.length - 1;
        const newIndex = isLastSlide ? 0 : currentPhotoIndex + 1;
        setCurrentPhotoIndex(newIndex)
    }


    // -----Move slider by dots-----
    const moveDot = (index) => {
        setCurrentPhotoIndex(index);
    }

    return (
        <div className='w-full h-[330px] max-md:h-[300px] relative group'>
            <div
                style={{ backgroundImage: `url(${arr[currentPhotoIndex]})`}}
                className='w-full h-full bg-no-repeat duration-500 bg-center' />
            {/* -----arrows----- */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
            left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer p-1 duration-500'>
                <BsChevronCompactLeft
                    onClick={prevImg} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
            right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer p-1 duration-500'>
                <BsChevronCompactRight
                    onClick={nextImg} size={30} />
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
                                    className={currentPhotoIndex === i ? 'w-full h-full bg-main' : 'hidden'}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider
