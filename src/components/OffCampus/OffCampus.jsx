import React, { useState, useEffect } from "react";
import "./OffCampus.css";
import img from "../../assets/images.png";
import MoonLoader from "react-spinners/MoonLoader";

import getAllNotifications from "../../api/getAllNotification";

function OffCampus() {
  const [cards, setCards] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllNotifications();
      setCards(data);
      console.log(data);
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
    <div className="offcampus">
      {cards.map((card) => {
        return (
          <div className="card">
            <div className="card-img">
              <img src={card.logoLink} alt="" />
            </div>
            <div className="card-text">
              <h1>{card.name}</h1>
              <button>Apply</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OffCampus;
