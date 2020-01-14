import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { addStatesList, isLoading } from '../../Actions';
import { stateNameList } from '../../utils/helpers';
import StatesContainer from '../StatesContainer/StatesContainer';
import StateInfo from '../StateInfo/StateInfo';
import './App.scss';
import PropTypes from 'prop-types';
import Header from '../../Components/Header'


export class App extends Component {

  componentDidMount() {
    this.getAllStatesList()
  
  }
  
  getAllStatesList = () => {
    this.props.addStatesList(stateNameList)
  }

  render(){
    return(
      <main className='App__main'>
        <Route path='/' render={() => <Header  />} />
        <Route exact path='/' render={() => <StatesContainer />} />
        <Route path='/stateInfo' render={() => <StateInfo /> } />
      </main>
    )
  }
}


export const mapDispatchToProps = dispatch => ({
  addStatesList: data => dispatch(addStatesList(data)),
})

export default connect(null, mapDispatchToProps)(App);


App.propTypes = {
  addStatesList: PropTypes.func,
  isLoading: PropTypes.func
}