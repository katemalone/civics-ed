import React from 'react'; 
import { connect } from 'react-redux';
import StatesCard from '../StatesCard/StatesCard';
// import { stateNameList } from '../../utils/helpers';
import { addStatesList } from '../../Actions'
import { bindActionCreators } from 'redux';
import AK from '../../utils/Images/AK.svg';
import AL from '../../utils/Images/AL.svg';
import AR from '../../utils/Images/AR.svg';
import AZ from '../../utils/Images/AL.svg';
import CA from '../../utils/Images/CA.svg';
import CO from '../../utils/Images/CO.svg';

const StatesContainer = ({ statesList }) => {


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