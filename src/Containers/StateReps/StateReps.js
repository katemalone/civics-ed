import React from 'react'; 

export const StateReps = ({ name, image, email, party, chamber }) => {
    return(
      <section className="StateReps_card">
        <h3>{name}</h3>
        <p>Chamber: {chamber}</p>
        <p>{party}</p>
        <p>Contact info {email}</p>
        <img src={image} />
      </section>
    )
}

export default StateReps;

