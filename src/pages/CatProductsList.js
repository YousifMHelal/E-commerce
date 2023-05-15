import React from 'react'
import Categories from '../components/Products/Categories'
import Products from '../components/Products/Products'

const ProductsList = () => {
  return (
    <div className='container mx-auto max-w-[1370px]'>
      <Categories />
      <Products />
    </div>
  )
}

export default ProductsList
