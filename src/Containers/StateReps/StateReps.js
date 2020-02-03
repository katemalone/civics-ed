import React from 'react'; 

export const StateReps = ({ name, image, email, party, chamber }) => {
    return(
      <section className="StateReps_card">
        <h3 className="StateReps_name">{name}</h3>
        <div className="StateReps_contact-div">
          <p>Chamber: {chamber}</p>
          <p>{party}</p>
          <p>Contact info {email}</p>
        </div>
        <img className="StateReps_img" src={image} />
      </section>
    )
}

export default StateReps;

