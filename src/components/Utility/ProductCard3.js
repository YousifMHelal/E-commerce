import React from "react";
import { AiFillStar,} from "react-icons/ai";

const ProductCard3 = ({ product }) => {
    return (
        <div className="py-8  p-2 bg-white shadow-md mt-2 flex items-center h-[200px] max-md:flex-col max-md:h-fit relative">
            <img className="h-full max-md:h-[200px] mr-8" src={product.img} alt="" />
            <div>
                <span className="text-2xl capitalize inline-block">{product.name}</span>
                <span className="text-xl uppercase text-p block">{product.info}</span>
                <strong className="text-2xl tracking-wider">{product.price}</strong>
                <sup>&#36;</sup>
                <div className="flex items-center mt-2">
                    <div className="uppercase text-xs mr-8 text-p">{product.offer}% off</div>{" "}
                    <span className="flex items-center bg-yellow-400 px-2 rounded-full text-xs text-white">
                        {product.rate} <AiFillStar className="text-xs text-white" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard3;
