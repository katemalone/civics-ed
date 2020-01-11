import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getStateInfo } from '../../utils/apiCalls';
import { addStateInfo, isLoading } from '../../Actions'
import { stateNameList } from '../../utils/helpers';
import StatesContainer from '../StatesContainer/StatesContainer';
import './App.scss'


class App extends Component {

  componentDidMount() {
    this.getAllStatesList()
    // const it = 'ca'
    // return getStateInfo(it)
    //   .then(data => console.log("data", data));
  }
  
  getAllStatesList = () => {
    this.props.addStateInfo(stateNameList)
  }

  render(){
    return(
      <main className="App__main">
        <StatesContainer />
      </main>
    )
  }
}

// export const mapStateToProps = (state) => ({
//   statesList
// })

export const mapDispatchToProps = dispatch => ( 
  bindActionCreators({
    addStateInfo,
    isLoading 
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);