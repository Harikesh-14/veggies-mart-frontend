import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

function FreshFruits() {
  return (
    <div className="w-full flex justify-center items-center p-5">
      <div className="w-10/12 flex flex-col justify-center items-center">
        <div className=" w-full flex flex-row justify-between py-10">
          <p className="text-5xl">Fresh Fruits</p>
          <Link className="text-black">View All &gt;</Link>
        </div>
        <div className="flex flex-row gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default FreshFruits;
