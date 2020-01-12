import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getStateInfo } from '../../utils/apiCalls';
import { addStatesList, isLoading } from '../../Actions'
import { stateNameList } from '../../utils/helpers';
import StatesContainer from '../StatesContainer/StatesContainer';
import StateInfo from '../StateInfo/StateInfo'
import './App.scss'


class App extends Component {

  componentDidMount() {
    this.getAllStatesList()
  
  }
  
  getAllStatesList = () => {
    this.props.addStatesList(stateNameList)
  }

  render(){
    return(
      <main className='App__main'>
        <Route exact path='/' render={() => <StatesContainer />} />
        <Route path='/stateInfo' render={() => <StateInfo /> } />
      </main>
    )
  }
}


export const mapDispatchToProps = dispatch => ( 
  bindActionCreators({
    addStatesList,
    isLoading 
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);