import React, { Component } from 'react';
import AK from '../../utils/Images/AK.svg';
import AL from '../../utils/Images/AL.svg';
import AR from '../../utils/Images/AR.svg';
import AZ from '../../utils/Images/AL.svg';
import CA from '../../utils/Images/CA.svg';
import CO from '../../utils/Images/CO.svg';
import { getStateInfo } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStateInfo } from '../../Actions'


export const StatesCard = ({id, name, statesImg }) => {

  const images = { AK, AL, AR, AZ, CA, CO }   
  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.parentNode.id)
    let state = e.target.parentNode.id;
    getStateInfo(state)

  }


  return ( 
    <section className="StatesCard" id={id}>
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
      <button className="StatesCard_button" onClick={(e)=> handleClick(e)}>Learn More!</button>
    </section>
  )
}

// export const mapStateToProps = ({}) => ({
  
// })

export const mapDispatchToProps = dispatch => {
  bindActionCreators({
    addStateInfo
  },dispatch)
}

export default connect(null, mapDispatchToProps)(StatesCard)
