import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRepInfo, isLoading, hasErrored }  from '../../Actions';
import { getStateReps } from '../../utils/apiCalls';
import StateRepsContainer from '../StateRepsContainer/StateRepsContainer'
import PropTypes from 'prop-types';

export class StateInfo extends Component {
  constructor(){
    super();
    this.state = {
      isClicked : false
    }
  }

 
  handleClick = async (e) => {
    e.preventDefault()
    const { setRepInfo } = this.props
    const { abbreviation } = this.props.currentState
    try{
      const reps = await getStateReps(abbreviation)
      const repsClean = Object.values(reps)
      setRepInfo(repsClean)
      this.setState({ isClicked:true })
    }catch{}
  }


  render(){
    const { isClicked } = this.state;
    const { name, legislature_name, legislature_url, capitol_timezone } = this.props.currentState;
    
  return(
    <section className="StateInfo" >
      <h2 className="State_Title">{name}</h2>
      <p>{legislature_name}</p>
      <a className="state_link" href={legislature_url} >{name} &rarr;</a>
      <p>{capitol_timezone}</p>
      { !isClicked &&
      <button className="btn" onClick={(e) => this.handleClick(e)}>see {name} reps</button>}
      {isClicked && 
        <StateRepsContainer /> }

    </section>
  )
}
}
export const mapStateToProps = ({ currentState, stateRepsInfo }) => ({
  currentState,
  stateRepsInfo,
})

export const mapDispatchToProps = dispatch => ({
  setRepInfo: data => dispatch(setRepInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StateInfo);

StateInfo.propTypes = {
  setRepInfo: PropTypes.func,
  currentState: PropTypes.object,
  stateRepsInfo: PropTypes.array
}