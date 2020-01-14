import React from 'react'; 
import { connect } from 'react-redux';
import StatesCard from '../StatesCard/StatesCard';
import { addStatesList } from '../../Actions'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


export const StatesContainer = ({ statesList }) => {

  let statesInfo = statesList.map(state => {

    return (
      <StatesCard 
        key={state.abbreviation.toLowerCase()}
        name={state.name} 
        id={state.abbreviation.toLowerCase()}
        statesImg={state.abbreviation}
        /> 
    )
  })
  
  return(
    <section className="StatesContainer"> 
      {statesInfo}
    </section>
  )
}

export const mapStateToProps = ({ statesList }) => ({
  statesList
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addStatesList
  },dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StatesContainer)

StatesContainer.propTypes = {
  addStateList: PropTypes.func,
  statesList: PropTypes.array,
}