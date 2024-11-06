import React from "react";

const ServiceCards = ({ icon, title, text, nick }) => {
  return (
    <div className={` serviceCards ${nick}`}>
      <div className="title">
        <div className="icon">{icon}</div>
        <h3 className="titleText">{title}</h3>
      </div>

      <p className="text">{text}</p>

      <button className="btnCard">Подробнее</button>
    </div>
  );
};

export default ServiceCards;
