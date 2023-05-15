import React from "react";

const Info = () => {
  return (
    <div className="mt-14 w-[500px] min-w-[300px] h-fit p-2 shadow-lg border-2 rounded-md flex flex-col">
      <h3 className="text-xl tracking-wider capitalize mt-4 font-bold">
        Order Summary
      </h3>
      <div className="flex items-center justify-between p-2 tracking-wide mt-8">
        <h4 className="text-lg font-semibold ">Subtotal</h4>
        <p>1 Item</p>
      </div>
      <div className="flex items-center justify-between p-2 tracking-wide">
        <h4 className="text-lg font-semibold ">shipping</h4>
        <p className="text-main">free</p>
      </div>
      <hr className="text-p mt-4 py-4" />
      <div className="flex items-center justify-between p-2 tracking-wide">
        <h4 className="text-lg font-semibold ">Total</h4>
        <p className="text-lg font-semibold ">3000<sup>&#36;</sup></p>
      </div>
      <button className="m-auto text-center mt-8 mb-4 text-xl uppercase p-2 text-main font-s">checkout</button>
    </div>
  );
};

export default Info;
