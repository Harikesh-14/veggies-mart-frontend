import React from "react";
import { Link } from "react-router-dom";

function SpecialOffer() {
  return (
    <div className="mt-32 flex flex-row pl-24 items-center rounded-md bg-purple-200 py-10">
      <div className="outer_div flex flex-row justify-center items-center">
        <div className="text font-bold m-10">
          <div className="flex flex-row gap-2 my-3">
            <h1 className="text-red-600 text-4xl">LIMITED</h1>
            <h1 className="text-4xl">OFFER %</h1>
          </div>
          <h1 className="text-4xl mb-4"> WOO! FLASH SALE</h1>

          <p className="mb-6 text-2xl">
            You get into the 2k+ best Products in flash offer with as in shaped
            sofa for sale
          </p>
          <Link className="p-4 bg-purple-500 block w-2/5 rounded shadow text-center hover:bg-slate-700 hover:text-white transition-all duration-300">
            Shop Now &nbsp; &nbsp; &gt;
          </Link>
        </div>

        <div className="image">
          <img
            src="../../specialOffer.png"
            alt="Special offer image"
            className="h-44 justify-center items-center mx-28"
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
