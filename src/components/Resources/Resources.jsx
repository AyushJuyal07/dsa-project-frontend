import React, { useState, useEffect } from "react";
import "./Resources.css";
import MoonLoader from "react-spinners/MoonLoader";
import { motion } from "framer-motion";

import getAllResources from "../../api/getAllResources";

function Resources() {
  const [cards, setCards] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllResources();
      setCards(data);
      // console.log("*****" + data);
      setIsLoaded(true);
    } catch (error) {
      console.log("There is an error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return isLoaded == false ? (
    <div className="loading">
      <MoonLoader
        color={"#ffffff"}
        loading={!isLoaded}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="resources"
    >
      {cards.map((card) => {
        return (
          <a className="resource-card" href={card.link}>
            <div className="title">
              <h1>{card.title}</h1>
              <p>Tags</p>
            </div>
            <div className="desc">
              <p>
                {card.description}
              </p>
            </div>
          </a>
        );
      })}
    </motion.div>
  );
}

export default Resources;
