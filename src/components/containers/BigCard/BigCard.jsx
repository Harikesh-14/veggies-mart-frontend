import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { Link } from "react-router-dom";

const BigCard = () => {
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
    <motion.div
      className="w-11/12 flex flex-row p-20 gap-5 justify-center items-center mx-auto"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0.9, y: 400 },
      }}
      transition={{ duration: 1 }}
    >
      {/* first */}

      <div className="shadow rounded-xl bg-green-200 flex flex-col gap-4 p-6 w-1/3">
        <p className=" font-thin text-xl">FRUITS</p>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-5xl">Healthy & Good Fruits</p>
          <Link className="p-4 bg-green-500 block w-2/5 rounded shadow text-center hover:bg-slate-700 hover:text-white transition-all duration-300">
            Shop Now &nbsp; &nbsp; &gt;
          </Link>
        </div>
        <img
          src="../../../../templateFruits.jpeg"
          alt=""
          className="w-full h-2/3 rounded-4xl"
        />
      </div>

      {/* second */}

      <div className="shadow rounded-lg bg-red-100 flex flex-col gap-4 p-6 w-1/3">
        <img
          src="../../../../templateFruits.jpeg"
          alt=""
          className="w-full h-2/3 rounded-4xl"
        />
        <p className=" font-thin text-xl">VEGEATABLES</p>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-5xl">Fresh & Good Vegetables</p>
          <Link className="p-4 bg-red-500 block w-2/5 rounded shadow text-center hover:bg-slate-700 hover:text-white transition-all duration-300">
            Shop Now &nbsp; &nbsp; &gt;
          </Link>
        </div>
      </div>

      {/* third */}

      <div className="shadow rounded-lg bg-purple-100 flex flex-col gap-4 p-6 w-1/3">
        <p className=" font-thin text-xl">JUICES</p>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-5xl">Fresh & Fine Juices</p>
          <Link className="p-4 bg-purple-500 block w-2/5 rounded shadow text-center hover:bg-slate-700 hover:text-white transition-all duration-300">
            Shop Now &nbsp; &nbsp; &gt;
          </Link>
        </div>
        <img
          src="../../../../templateFruits.jpeg"
          alt=""
          className="w-full h-2/3 rounded-4xl"
        />
      </div>
    </motion.div>
  );
};

export default BigCard;
