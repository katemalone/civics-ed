import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux'
import { getStateInfo } from '../../utils/apiCalls'

const StateInfo = ({ currentState }) => {
  const { name, legislature_name, legislature_url, chambers, session_details, capitol_timezone, terms } = currentState;
  return(
    <section className="StateInfo" >
      <h2 className="State_Title">{name}</h2>
      <p>{legislature_name}</p>
      <p>{legislature_url}</p>
      {/* <p>{chambers}</p> */}
      {/* <p>{session_details}</p> */}
      <p>{capitol_timezone}</p>
      {/* <p>{terms}</p> */}
    </section>
  )
}

export const mapStateToProps = ({ currentState }) => ({
  currentState
})

export const mapDispatchToProps = dispatch => ({
  // bindActionCreators({

  // }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(StateInfo);