import React from 'react'
import Slider from '../components/Home/Slider'
import Categories from '../components/Home/Categories'
import BestSeller from '../components/Home/BestSeller'
import Brands from '../components/Home/Brands'
import Recommended from '../components/Home/Recommended'
import Offer from '../components/Home/Offer'
import Deals from '../components/Home/Deals'

const Home = () => {
    return (
        <div>
            <Slider />
            <Categories />
            <BestSeller />
            <Brands />
            <Recommended />
            <Offer />
            <Deals />
        </div>
    )
}

export default Home
