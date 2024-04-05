import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

import "./ProductCard.css";

function ProductCard() {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <Card className="flex flex-col justify-center items-center px-6 bg-white border-2">
        <CardHeader className="flex flex-col justify-center">
          <img src="../../../../apple.png" alt="Tomato" className="w-36" />
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
          <CardTitle className="text-center"> Tomato</CardTitle>
          <CardDescription>RS 50.00</CardDescription>
        </CardHeader>
        <CardContent>
            <button className="bg-green-100 px-15">Add to Cart</button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
