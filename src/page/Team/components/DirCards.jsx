import React from "react";
import "../styles/Card.css";
import SingleCard from "./SingleCard";
import pic5 from "../images/p5.jpg";
import pic6 from "../images/p6.jpg";
import pic7 from "../images/p7.jpg";
import pic8 from "../images/p8.jpg";

const detail = [
  {
    name: "USMAN SIDDIQUI",
    post: "President",
    imageURL: pic5,
  },
  {
    name: "HAIQA FAIQ",
    post: "Vice President",
    imageURL: pic6,
  },
  {
    name: "MIRZA SAMIUDDIN",
    post: "General Secretary",
    imageURL: pic7,
  },
  {
    name: "YOUSRA ISHTIAQUE",
    post: "Membership Chair",
    imageURL: pic8,
  },
];

const DirCards = () => {
  return (
    <>
      <div className="cards-main">
        {detail.map((i) => {
          return (
            <SingleCard name={i.name} post={i.post} imageURL={i.imageURL} />
          );
        })}
      </div>
    </>
  );
};

export default DirCards;
