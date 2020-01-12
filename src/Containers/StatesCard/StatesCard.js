import React from 'react';
import AK from '../../utils/Images/AK.svg';
import AL from '../../utils/Images/AL.svg';
import AR from '../../utils/Images/AR.svg';
import AZ from '../../utils/Images/AL.svg';
import CA from '../../utils/Images/CA.svg';
import CO from '../../utils/Images/CO.svg';


export const StatesCard = ({id, name, statesImg }) => {

  const images = { AK, AL, AR, AZ, CA, CO }   

  return ( 
    <section className="StatesCard" data-id={id}>
      <div className="StatesCard-div">
      <div className="StatesCard_header">
      <h2 className="header_name" >{name}</h2>
      <p className="header_description">Choose {name} to see the representatives , bills, and something else</p>
      </div>
      <div className="StatesCard_img-div">
      <i className="fa fa-arrow-left arrow" />
      <img className="img_img" src={images[statesImg]} /> 
      <i className="fa fa-arrow-right arrow" />
      </div>
      </div>
      <button className="StatesCard_button">Learn More!</button>
    </section>
  )
}




export default StatesCard;


