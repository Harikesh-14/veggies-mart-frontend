import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

import "./ProductCard.css";

function ProductCard({ productName, price, productPic}) {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <Card className="flex flex-col justify-center items-center px-6 bg-white border-2">
      <CardHeader className="flex flex-col justify-center">
        <img src={productPic} alt="Fruit Photo" className="w-36 select-none" />
        <div className="star-rating flex justify-center">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`star-button ${index <= (hover || rating) ? "on" : "off"}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <CardTitle className="text-center">{productName}</CardTitle>
        <CardDescription className="text-center">{price}</CardDescription>
      </CardHeader>
      <CardContent className="m-[-15px]">
        <div className="py-1">
          <select name="fruitQty" id="fruitQty" className="border p-1">
            <option value="select-qty">Select quantity</option>
            <option value="500g">500g</option>
            <option value="1kg">1Kg</option>
            <option value="2kg">2Kg</option>
            <option value="3kg">3Kg</option>
            <option value="4kg">4Kg</option>
            <option value="5kg">5Kg</option>
          </select>
        </div>
        <button className="bg-green-200 w-[8.5rem] py-2 mt-3 text-green-800 rounded font-semibold hover:bg-green-300">Add to Cart &gt;</button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
