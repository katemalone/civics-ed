import React from 'react';

export const StatesCard = ({id, name }) => {
  return ( 
    <section data-id={id}>
      <h2>{name}</h2>
      <p>Choose {name} to see the representatives , bills, and something els</p>
      <button>Learn More!</button>
    </section>
  )
}

export default StatesCard;
