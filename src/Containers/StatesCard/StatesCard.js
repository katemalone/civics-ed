import React, { Component } from 'react';
import AK from '../../utils/Images/AK.svg';
import AL from '../../utils/Images/AL.svg';
import AR from '../../utils/Images/AR.svg';
import AZ from '../../utils/Images/AL.svg';
import CA from '../../utils/Images/CA.svg';
import CO from '../../utils/Images/CO.svg';
import { getStateInfo } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { addStateInfo, hasErrored, setLoading } from '../../Actions'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class StatesCard extends Component {
  constructor(){
    super();
    this.state = {
      isClicked : false,
      // thisBitch : this.props.isLoading
    }
  }
  

  handleClick = async (e) => { 
    e.preventDefault()
    const { addStateInfo, setLoading, errorMsg } = this.props;
    try {
      const state = e.target.parentNode.parentNode.id
      setLoading(true);
      const stateInfo = await getStateInfo(state)
      addStateInfo(stateInfo)
      hasErrored('')
      this.setState({ isClicked: true })
      setLoading(false)
    } catch({messge}){
      setLoading(false)
      hasErrored({ errorMsg })
    }
  }

  render(){
    console.log('isLoading line 21', this.props);
    const images = { AK, AL, AR, AZ, CA, CO };
    const { id, name, statesImg, errorMsg, isLoading } = this.props;
    console.log('isLoading line 45', this.props);
    
    const { isClicked } = this.state;

    if(isClicked){ 
    return <Redirect to='/stateInfo' />
    } 
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
        {isLoading === true ? console.log('THIS WANTS TO CHANGE - TRUE', isLoading) : console.log('THIS WANTS TO CHANGE - FALSE', this.props.isLoading)}
        {isLoading === true && <p className="loading-msg">Loading <i className="fa fa-refresh fa-spin" ></i></p>}
        <button className="btn StatesCard_btn" onClick={(e) => this.handleClick(e)} >Choose {name}! </button>
      </div>
    </section>
    )
  }
}



export const mapStateToProps = state => ({
  errorMsg: state.errorMsg,
  isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => ({
  addStateInfo: data => dispatch(addStateInfo(data)),
  setLoading: bool => dispatch(setLoading(bool)),
  hasErrored: message => dispatch(hasErrored(message))
})


export default connect(null, mapDispatchToProps)(StatesCard)

StatesCard.propTypes = {
  addStateInfo: PropTypes.func,
  errorMsg: PropTypes.string,
  hasErrored: PropTypes.func,
  isLoading: PropTypes.func
}
