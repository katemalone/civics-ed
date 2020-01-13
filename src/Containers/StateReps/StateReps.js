import React from 'react'; 

export const StateReps = ({ name, image, email, party,chamber, info }) => {
    return(
      <section className="StateReps_card">
        <h3>{name}</h3>
        <img src={image} />
        <p>Contact info</p>
        <p>{email}</p>
        <p>{party}</p>
        <p>{chamber}</p>
        <p>{info}</p>
      </section>
    )
}

export default StateReps;

