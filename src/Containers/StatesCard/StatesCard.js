import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AK from '../../utils/Images/AK.svg';
import AL from '../../utils/Images/AL.svg';
import AR from '../../utils/Images/AR.svg';
import AZ from '../../utils/Images/AL.svg';
import CA from '../../utils/Images/CA.svg';
import CO from '../../utils/Images/CO.svg';

export const StatesCard = ({id, name, statesImg }) => {

  const images = [{ "AK": AK }, { "AL": AL }, { "AR": AR }, { "AZ": AZ }, { "CA": CA }, { "CO": CO } ]; 

 const displayImages = (id) => {
  return images.forEach(image => {
    const stateImg = Object.keys(image) === id;
    return (<img src={stateImg} />)
  })
 }

  // const images = [ {"AK": AK} , AL, AR, AZ, CA, CO];

  // const displayImages = () => {
  //   return images.find(image => {
  //      const it = image === statesImg;
  //      return (
  //        <img src={it} />
  //      )
  //   })
  // }

  return ( 
    <section data-id={id}>
      <h2>{name}</h2>
      <p>Choose {name} to see the representatives , bills, and something els</p>
      <i class="fa fa-arrow-left"></i>
      {displayImages} 
      <i class="fa fa-arrow-right"></i>
      <button>Learn More!</button>
    </section>
  )
}



// export const mapDispatchToProps = dispatch => {
//   bindActionCreators({

//   },dispatch)
// }

export default StatesCard;

// export default connect(null, mapDispatchToProps)(StatesCard);
