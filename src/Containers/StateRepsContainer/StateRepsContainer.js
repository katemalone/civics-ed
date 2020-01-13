import React from 'react'; 
import { connect } from 'react-redux';
import StateReps from '../StateReps/StateReps'

export const StateRepsContainer = ({ stateRepsInfo }) => {
  const display = stateRepsInfo.map(rep => {
    return (
      <StateReps
        key={rep.id}
        name={rep.full_name}
        image={rep.photo_url}
        email={rep.email}
        party={rep.party}
        chamber={rep.chamber}
      />
    )
  })
  return( 
    <div>
      {display}
    </div>
  )
}

export const mapStateToProps = ({ stateRepsInfo }) => ({
  stateRepsInfo
})

export const mapDispatchToProps = dispatch => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(StateRepsContainer)