import React from "react";

const Cards = ({item}) => {
    const{id,name,imageURL,description,prices}=item;
    return (
      <div className="cards">
          <div className="image_box">
              <img src={imageURL} alt=""></img>
          </div>
          <div className="details">
              <p>Name:{name}</p>
              <p>Description:{description}</p>
              <p>Prices:{prices}</p>
              <button>Add to Cart</button>
          </div>
      </div> 
    )
}
export default Cards;