import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRepInfo, setLoading, hasErrored }  from '../../Actions';
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
    const { setRepInfo, errorMsg } = this.props
    const { abbreviation } = this.props.currentState
    try{
      const reps = await getStateReps(abbreviation)
      const repsClean = Object.values(reps)
      setRepInfo(repsClean)
      this.setState({ isClicked:true })
      hasErrored('')
    } catch ({ messge }) {
      hasErrored({ errorMsg })
    }
  }


  render(){
    const { isClicked } = this.state;
    const { name, legislature_name, legislature_url, capitol_timezone } = this.props.currentState;
    const { errorMsg } = this.props;
    
  return(
    <section className="StateInfo" >
      <h2 className="State_Title">{name}</h2>
      <p>{legislature_name}</p>
      <a className="state_link" href={legislature_url} > Visit {name}Offical Page &rarr;</a>
      <p>{capitol_timezone}</p>
      { !isClicked &&
        <button className="btn StateInfo_btn" onClick={(e) => this.handleClick(e)}>{isClicked && <i className="fa fa-refresh fa-spin"></i>}see {name} reps</button>}
      {isClicked && 
        <StateRepsContainer /> }
      {errorMsg && <p className="login-error">{errorMsg}</p>}

    </section>
  )
}
}
export const mapStateToProps = ({ currentState, stateRepsInfo, errorMsg }) => ({
  currentState,
  stateRepsInfo,
  errorMsg
})

export const mapDispatchToProps = dispatch => ({
  setRepInfo: data => dispatch(setRepInfo(data)),
  hasErrored: message => dispatch(hasErrored(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(StateInfo);

StateInfo.propTypes = {
  setRepInfo: PropTypes.func,
  currentState: PropTypes.object,
  stateRepsInfo: PropTypes.array
}