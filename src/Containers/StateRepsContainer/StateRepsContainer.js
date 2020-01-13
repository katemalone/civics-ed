import React from 'react'; 
import { connect } from 'react-redux';
import StateRepsCard from '../StateReps/StateReps'

export const StateRepsContainer = () => {
  const { StateReps } = this.props;
  const display = StateReps.map(rep => {
    return (
      <StateRepsCard
        key={rep.id}
        name={rep.full_name}
        image={rep.photo_url}
        email={rep.email}
        party={rep.party}
        chamber={rep.chamber}
        info={rep.offices.address}
      />
    )
  })
  return( 
    <div>
      {display}
    </div>
  )
}

export const mapStateToProps = ({ stateReps }) => ({
  stateReps
})

export const mapDispatchToProps = dispatch => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(StateRepsContainer)