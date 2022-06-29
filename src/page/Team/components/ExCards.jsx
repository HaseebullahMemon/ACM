import React from "react";
import "../styles/Card.css";
import SingleCard from "./SingleCard";
import pic1 from "../images/p1.jpg";
import pic2 from "../images/p2.jpg";
import pic3 from "../images/p3.jpg";
import pic4 from "../images/p4.jpg";

const detail = [
  {
    name: "USMAN SIDDIQUI",
    post: "President",
    imageURL: pic1,
  },
  {
    name: "HAIQA FAIQ",
    post: "Vice President",
    imageURL: pic2,
  },
  {
    name: "MIRZA SAMIUDDIN",
    post: "General Secretary",
    imageURL: pic3,
  },
  {
    name: "YOUSRA ISHTIAQUE",
    post: "Membership Chair",
    imageURL: pic4,
  },
];

const ExCards = () => {
  return (
    <>
      <div className="cards-main">
        {detail.map((i) => {
          return <SingleCard name={i.name} post={i.post} imageURL={i.imageURL}/>;
        })}
      </div>
    </>
  );
};

export default ExCards;
