import React from 'react'
import ProductCard from '../Utility/ProductCard'
import product1 from '../../assets/prouducts/product-1.avif'
import product2 from '../../assets/prouducts/product-2.avif'
import product3 from '../../assets/prouducts/product-3.avif'
import product4 from '../../assets/prouducts/product-4.avif'
import product5 from '../../assets/prouducts/product-5.avif'
import product6 from '../../assets/prouducts/product-6.avif'

const products = () => {


    const products = [
        {
            id: 1,
            img: product1,
            name: 'Samsung Samsung 65 Inch 4K',
            info: 'UHD Smart LED TV With Built',
            price: 500.00,
            offer: 0,
            rate: 4.7
        },
        {
            id: 2,
            img: product2,
            name: 'Generic World Map Gaming',
            info: 'mouse pad',
            price: 5.00,
            offer: 10,
            rate: 4.5
        },
        {
            id: 3,
            img: product3,
            name: 'Sony PlayStation 5 Digital',
            info: 'Edition Console With Control',
            price: 699.00,
            offer: 12.5,
            rate: 4.3
        },
        {
            id: 5,
            img: product5,
            name: 'Lg QNED TV 65 Inch QNED95',
            info: 'Series, Cinema Screen Desig',
            price: 1299.00,
            offer: 12,
            rate: 5
        },
        {
            id: 6,
            img: product6,
            name: 'Samsung Galaxy A13 Black',
            info: '64GB 4GB 4G LTE EGYTP',
            price: 1250.00,
            offer: 10,
            rate: 4.6
        },
        {
            id: 4,
            img: product4,
            name: 'Sony PlayStation 5 Gaming',
            info: 'Console With Controller CD ',
            price: 899.00,
            offer: 18,
            rate: 4.8
        },
        
    ]


    return (
        <div className='container mx-auto max-w-[1370px] px-2 mt-4'>
            <div className='flex justify-between'>
                <h3 className='text-xl tracking-wider capitalize font-bold'>Products Cat name</h3>
            </div>
            <div className='flex justify-center flex-wrap gap-5 px-2'>
                {
                    products.map(product => {
                        return (
                            <div>
                                <ProductCard key={product.id} product={product} />
                                <ProductCard key={product.id} product={product} />
                                <ProductCard key={product.id} product={product} />
                                <ProductCard key={product.id} product={product} />
                                <ProductCard key={product.id} product={product} />
                            </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default products
