import React from 'react'
import Cat from '../Utility/Cat'
import cat1 from '../../assets/categories/cat-1.webp'
import cat2 from '../../assets/categories/cat-2.webp'
import cat3 from '../../assets/categories/cat-3.webp'
import cat4 from '../../assets/categories/cat-4.webp'
import cat5 from '../../assets/categories/cat-5.webp'
import cat6 from '../../assets/categories/cat-6.webp'
import cat7 from '../../assets/categories/cat-7.webp'
import cat8 from '../../assets/categories/cat-8.webp'
import cat9 from '../../assets/categories/cat-9.webp'


const Categories = () => {
    let cats = [
        {
            id: 1,
            img: cat1,
            name: 'mobile'
        },
        {
            id: 2,
            img: cat2,
            name: 'headsets'
        },
        {
            id: 3,
            img: cat3,
            name: 'beauty'
        },
        {
            id: 4,
            img: cat4,
            name: 'labtops'
        },
        {
            id: 5,
            img: cat5,
            name: 'Video games'
        },
        {
            id: 6,
            img: cat6,
            name: 'foot wear'
        },
        {
            id: 7,
            img: cat7,
            name: 'electronics'
        },
        {
            id: 8,
            img: cat8,
            name: 'cameras'
        },
        {
            id: 9,
            img: cat9,
            name: 'wearables'
        },
    ];

    return (
        <div className='flex justify-center py-4 flex-wrap'>
            {
                cats.map(item => {
                    return (
                        <Cat key={item.id} cat={item} />
                    )
                })
            }
        </div>
    )
}

export default Categories
