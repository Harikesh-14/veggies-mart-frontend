import React from "react";
import { Link } from "react-router-dom";

function TwoCard() {
  const cardDetails = [
    {
      title: "Fresh Fruits",
      description: "Healthy & Fresh Fruits",
      // image: "../../../../templateFruits.jpeg",
      color: "bg-green-200",
      buttonColor: "bg-green-500",
      link: "Shop Now >"
    },
    {
      title: "Fresh Vegetables",
      description: "The 14 Most Nutrient-Dense Vegetables",
      // image: "../../../../templateVegetables.jpeg",
      color: "bg-red-100",
      buttonColor: "bg-red-500",
      link: "Shop Now >"
    }
  ]

  return (
    <div className="w-full flex flex-col justify-center pb-10">
      <div className="flex flex-row justify-center gap-4 py-10">
        {cardDetails.map((card, index) => (
          <div key={index} className={`shadow rounded-xl flex flex-col items-start gap-4 p-6 w-1/3 ${card.color}`}>
            <p className=" font-thin text-xl">{card.title}</p>
            <div className="h-full flex flex-col justify-between gap-10">
              <p className="font-bold text-5xl">{card.description}</p>
              <Link className={`p-4 block w-2/5 ${card.buttonColor} rounded shadow text-center hover:bg-slate-700 hover:text-white transition-all duration-300`}>
                {card.link}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center py-10 bg-purple-200">
        <div className="w-3/5 flex flex-col justify-center items-center gap-7">
          <h1 className="text-4xl font-bold text-center">Get the best deal on Dairy Products</h1>
          <p className="text-center">You get into the 2k+ best products in flash offer with add in products for your daily kitchen supply ❤️</p>
          <button
            type="button"
            className="bg-green-500 text-white py-4 w-[180px] rounded shadow hover:bg-slate-700 transition-all duration-300"
          >
            Shop Now &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TwoCard;
