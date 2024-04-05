import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

function TopSellingProducts() {
  const products = [
    { productName: "Tomato", price: "RS 50.00", productPic: "../../../../apple.png" },
    { productName: "Apple", price: "RS 100.00", productPic: "../../../../apple.png" },
    { productName: "Banana", price: "RS 30.00", productPic: "../../../../apple.png" },
    { productName: "Grapes", price: "RS 60.00", productPic: "../../../../apple.png" },
    { productName: "Orange", price: "RS 40.00", productPic: "../../../../apple.png" },
    { productName: "Mango", price: "RS 70.00", productPic: "../../../../apple.png" },
    { productName: "Pineapple", price: "RS 90.00", productPic: "../../../../apple.png" },
    { productName: "Papaya", price: "RS 80.00", productPic: "../../../../apple.png" },
    { productName: "Watermelon", price: "RS 20.00", productPic: "../../../../apple.png" },
    { productName: "Guava", price: "RS 10.00", productPic: "../../../../apple.png" },
  ];

  return (
    <div className="w-full flex justify-center items-start py-10">
      <div className="w-10/12">
        <div className="flex flex-row justify-between py-5">
          <h1 className="text-5xl">Top selling products</h1>
          <Link className="font-semibold underline cursor-pointer">View all</Link>
        </div>

        <div className="flex flex-row flex-wrap gap-3">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.productName}
              price={product.price}
              productPic={product.productPic}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSellingProducts;
