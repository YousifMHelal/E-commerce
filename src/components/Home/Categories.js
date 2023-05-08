import React from 'react'
import Cat from '../Utility/Cat'
import cat1 from '../../assets/categories/cat-1.jpg'
import cat2 from '../../assets/categories/cat-2.jpg'
import cat3 from '../../assets/categories/cat-3.jpg'
import cat4 from '../../assets/categories/cat-4.jpg'
import cat5 from '../../assets/categories/cat-5.jpg'
import cat6 from '../../assets/categories/cat-6.jpg'
import cat7 from '../../assets/categories/cat-7.jpg'
import cat8 from '../../assets/categories/cat-8.jpg'
import cat9 from '../../assets/categories/cat-9.jpg'
import cat10 from '../../assets/categories/cat-10.jpg'


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
        {
            id: 10,
            img: cat10,
            name: 'furniture'
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
