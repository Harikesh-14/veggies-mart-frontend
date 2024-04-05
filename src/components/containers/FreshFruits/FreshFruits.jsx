import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

function FreshFruits() {
  const products = [
    { productName: "Tomato", price: "RS 50.00", productPic: "../../../../apple.png" },
    { productName: "Apple", price: "RS 100.00", productPic: "../../../../apple.png" },
    { productName: "Banana", price: "RS 30.00", productPic: "../../../../apple.png" },
    { productName: "Grapes", price: "RS 60.00", productPic: "../../../../apple.png" },
    { productName: "Orange", price: "RS 40.00", productPic: "../../../../apple.png" },
  ]

  return (
    <div className="w-full flex justify-center items-center p-5">
      <div className="w-10/12 flex flex-col justify-center items-center">
        <div className=" w-full flex flex-row justify-between py-10">
          <p className="text-5xl">Fresh Fruits</p>
          <Link className="font-semibold underline cursor-pointer">View All</Link>
        </div>
        <div className="flex flex-row gap-6">
          {
            products.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.productName}
                price={product.price}
                productPic={product.productPic}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FreshFruits;
