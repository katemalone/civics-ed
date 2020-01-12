import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux'
import { getStateInfo } from '../../utils/apiCalls'

const StateInfo = () => {

  return(
    <section className="StateInfo" >
      <h1>HI</h1>
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