import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // Import motion components

import ProductCategories from "../../../DataList/ProductCategories.json";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import "./MarketCategory.css";

const MarketCategory = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust this value according to your needs
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <div>
      <p className="text-4xl mx-16 mt-20 mb-8 font-semibold">Market Category</p>
      <Carousel className="w-10/12 mx-auto">
        <CarouselContent className="-ml-1">
          {ProductCategories.categories.map((item, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
              <motion.div
                className="p-1"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 300 },
                }}
                transition={{ duration: 1 }}
              >
                <Link to={`/category/${item.category_name}`}>
                  <Card>
                    <CardContent className=" h-72 flex flex-col items-center justify-between p-6 border shadow-lg rounded bg-green-50">
                      <img src={item.path} alt={item.category_name} className="bg-white rounded-3xl" />
                      <p className="text-center font-medium">{item.category_name}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-16 shadow" />
        <CarouselNext className="h-16 shadow" />
      </Carousel>
    </div>
  );
};

export default MarketCategory;
