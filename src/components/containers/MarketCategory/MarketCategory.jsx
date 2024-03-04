import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./MarketCategory.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const marketPlaceData = {
  marketPlace: [
    {
      id: 1,
      title: "Fruits",
      imagepath: "../../../../public/fruitsMarketPlace.avif",
    },
    {
      id: 2,
      title: "Vegetables",
      imagepath: "../../../../public/vegetables.avif",
    },
    {
      id: 3,
      title: "Juice",
      imagepath: "../../../../public/Juices.webp",
    },
    {
      id: 4,
      title: "Meat",
      imagepath: "../../../../public/Meat.avif",
    },
    {
      id: 5,
      title: "Cold Drinks",
      imagepath: "../../../../public/ColdDrinks.png",
    },
    {
      id: 6,
      title: "Breads",
      imagepath: "../../../../public/Breads.avif",
    },
  ],
};

const MarketCategory = () => {
  return (
    <div>
      <div className="title mx-6">MarketPlace</div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {marketPlaceData.marketPlace.map((item) => (
            <CarouselItem key={item.id}>
              <img src={item.imagepath} alt={item.title} className="mx-6"/>
              <Link to={item.title} className="categoryTitle align-middle">
                {item.title}
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MarketCategory;
