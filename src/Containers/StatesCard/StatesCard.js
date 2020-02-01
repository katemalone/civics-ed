import React, { Component } from 'react';
import AK from '../../utils/Images/AK.svg';
import AL from '../../utils/Images/AL.svg';
import AR from '../../utils/Images/AR.svg';
import AZ from '../../utils/Images/AL.svg';
import CA from '../../utils/Images/CA.svg';
import CO from '../../utils/Images/CO.svg';
import { getStateInfo } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { addStateInfo, hasErrored, isLoading } from '../../Actions'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class StatesCard extends Component {
  constructor(){
    super();
    this.state = {
      isClicked : false
    }
  }

  handleClick = async (e) => { 
    e.preventDefault()
    const { addStateInfo, isLoading, errorMsg } = this.props;
    try {
      const state = e.target.parentNode.parentNode.id
      isLoading(true);
      console.log("isLoading1", isLoading)
      const stateInfo = await getStateInfo(state)
      addStateInfo(stateInfo)
      hasErrored('')
      this.setState({ isClicked: true })
      isLoading(false)
    } catch({messge}){
      isLoading(false)
      hasErrored({ errorMsg })
    }
  }

  render(){
  const images = { AK, AL, AR, AZ, CA, CO };
    const { id, name, statesImg, errorMsg, isLoading } = this.props;
  const { isClicked } = this.state;

  let stateButton 

    if (isLoading === true) {
      stateButton = <button className = "buttonload">
      <i className = "fa fa-refresh fa-spin" ></i> Loading</button > 
    } else {
      stateButton = <button className="btn StatesCard_btn" onClick={(e) => this.handleClick(e)} >Choose {name}! </button>
    }
  
    // if(isClicked){ 
    // return <Redirect to='/stateInfo' />
    // } 
  return ( 
    <section className="StatesCard" id={id}>
      <div className="StatesCard-div">
      <div className="StatesCard_header">
      <h2 className="header_name" >{name}</h2>
      <p className="header_description">Choose {name} to see the state representatives. </p>
      </div>
      <div className="StatesCard_img-div">
      <img className="img_img" src={images[statesImg]} /> 
      </div>
        {errorMsg && <p className='error'>{errorMsg}</p>}
        {stateButton}
      </div>
    </section>
    )
  }
}



export const mapStateToProps = ({ errorMsg, isLoading }) => ({
  errorMsg,
  isLoading
})

export const mapDispatchToProps = dispatch => ({
  addStateInfo: data => dispatch(addStateInfo(data)),
  isLoading: bool => dispatch(isLoading(bool)),
  hasErrored: message => dispatch(hasErrored(message))
})


export default connect(null, mapDispatchToProps)(StatesCard)

StatesCard.propTypes = {
  addStateInfo: PropTypes.func,
  errorMsg: PropTypes.string,
  hasErrored: PropTypes.func,
  isLoading: PropTypes.func
}
