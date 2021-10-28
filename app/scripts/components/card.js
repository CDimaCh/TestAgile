import React from 'react';


const Card = ({card}) => {
  return(
      <div className="card">
        <img className="card__image" alt={card.name} src={card.picture} />
        <div className="card__info">
          <h2>{card.name}</h2>
          <p>{card.price} $</p>
        </div>
      </div>
    )
}
export default Card;