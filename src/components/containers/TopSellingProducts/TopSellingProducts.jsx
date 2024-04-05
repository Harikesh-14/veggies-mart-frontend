import React from "react";

function TopSellingProducts() {
  return (
    <div className="p-4 md:p-14 text-xl md:text-2xl">
      <h1 className="text-center">Top Selling Products</h1>
      <div className="outerRectCard flex flex-col items-center md:flex-row md:justify-around mt-8 md:mt-16">
        <div className="RectCard border-2 mb-4 md:mb-0 w-64 h-40">
          <h2>White EggPlant</h2>
        </div>
      </div>
    </div>
  );
}

export default TopSellingProducts;
