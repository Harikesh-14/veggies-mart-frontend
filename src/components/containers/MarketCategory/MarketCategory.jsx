import React, { useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./MarketCategory.css";

const MarketCategory = () => {
  // Sample data from your JSON
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

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.add("appear");
      }
    });
  };

  return (
    <div>
      <Element name="top" />
      <div className="title">
        <Link to="top" smooth={true} duration={500}>
          MarketPlace
        </Link>
      </div>
      <div className="cards-container">
        {marketPlaceData.marketPlace.map((item) => (
          <div key={`marketplace_${item.id}`} className="card">
            <img
              src={item.imagepath}
              alt={item.title}
              className="marketImage"
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketCategory;
