import React from 'react'; 
import { connect } from 'react-redux';
import StatesCard from '../StatesCard/StatesCard';
import { stateNameList } from '../../utils/helpers';
import { addStatesList } from '../../Actions'
import { bindActionCreators } from 'redux';

const StatesContainer = () => {
  let statesInfo = stateNameList.map(state => {
    return (
      <StatesCard 
        key={state.abbreviation.toLowerCase()}
        name={state.name} 
        id={state.abbreviation.toLowerCase()}
        /> 
    )
  })
  
  return(
    <section className="StatesContainer"> 
      {statesInfo}
    </section>
  )
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addStatesList
  },dispatch)
)

export default connect(null, mapDispatchToProps)(StatesContainer)