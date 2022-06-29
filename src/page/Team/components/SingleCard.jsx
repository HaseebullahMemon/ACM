import React from "react";
import "../styles/Card.css";
const SingleCard = (props) => {
  return (
    <div>
      <div class="card">
        <div class="imgBx">
          <img src={props.imageURL} alt="images" />
        </div>
        <div class="details">
          <h2>
            {props.name}
            <br />
            <span>{props.post}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
