import React from "react";

import Card from "../Card/Card";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Github",
    image: image1,
    url: "#",
  },
  {
    id: 2,
    title: "Youtube",
    image: image2,
    url: "#",
  },
  {
    id: 3,
    title: "Instagram",
    image: image3,
    url: "#",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              image={card.image}
              url={card.url}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
