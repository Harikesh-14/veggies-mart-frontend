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

  const templateData = {
    template: [
      {
        id: 1,
        title: "FRUITS",
        header: "Healthy & Good Fruits",
        button: "Shop Now >",
        image: "../../../assets/images/templateFruits.jpeg",
      },
      {
        id: 2,
        title: "VEGETABLES",
        header: "Fresh & Organic Vegetables",
        button: "Shop Now >",
        image: "../../../assets/images/templateVegetable.jpeg",
      },
      {
        id: 3,
        title: "JUICES",
        header: "Best Fruit Juices",
        button: "Shop Now >",
        image: "../../../assets/images/templateJuice.jpeg",
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
      const templateCards = document.querySelectorAll(".template-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          card.classList.add("appear");
        }
      });

      templateCards.forEach((templateCard) => {
        const rect = templateCard.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          templateCard.classList.add("appear");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="title">MarketPlace</div>
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
      <div className="template-cards-container">
        {templateData.template.map((item) => (
          <div key={`template_${item.id}`} className="template-card">
            <p>{item.header}</p>
            <h3>{item.title}</h3>
            <button>{item.button}</button>
            <img src={item.image} alt={item.title} className="template-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketCategory;
