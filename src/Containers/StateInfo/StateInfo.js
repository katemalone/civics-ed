import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRepInfo, isLoading, hasErrored }  from '../../Actions';
import { getStateReps } from '../../utils/apiCalls';

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
      setRepInfo(reps)
      this.setState({isClicked:true})
    }catch{}
  }


  // cleanStateRepInfo = () => {
  //   stateReps.filter(rep => {
  //   })
  // }
  render(){
    const { isClicked } = this.state;
    const { name, legislature_name, legislature_url, chambers, capitol_timezone } = this.props.currentState;
    
  return(
    <section className="StateInfo" >
      <h2 className="State_Title">{name}</h2>
      <p>{legislature_name}</p>
      <a className="state_link" href={legislature_url} >{name} &rarr;</a>
      {/* <p>{chambers}</p> */}
      <p>{capitol_timezone}</p>
      { !isClicked &&
      <button onClick={(e) => this.handleClick(e)}>see reps</button>}
      {isClicked && 
      <div className="stateReps">
        <p>hello</p>
      </div> }

    </section>
  )
}
}
export const mapStateToProps = ({ currentState, errorMsg, stateReps }) => ({
  currentState,
  stateReps,
  errorMsg
})

export const mapDispatchToProps = dispatch => ({
  setRepInfo: data => dispatch(setRepInfo(data)),
  isLoading: bool => dispatch(isLoading(bool)),
  hasErrored: message => dispatch(hasErrored(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(StateInfo);