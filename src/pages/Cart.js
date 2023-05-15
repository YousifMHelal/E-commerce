import React from "react";
import Products from '../components/Cart/Products'
import Info from '../components/Cart/Info'

const WishList = () => {
    return (
        <div className="container mx-auto max-w-[1370px] min-h-[70vh] flex max-md:flex-col max-md:items-center">
            <Products />
            <Info />
        </div>
    );
};

export default WishList;
