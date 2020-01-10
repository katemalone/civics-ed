import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getStateInfo } from '../../utils/apiCalls';
import { addStateInfo, isLoading } from '../../Actions'
import stateList from '../../utils/helpers'

class App extends Component {


  componentDidMount() {
    const it = 'ca'
    return getStateInfo(it)
      .then(data => console.log("data", data));
  }
  
  getAllStatesList = () => {
    stateList.map(state => {
      return 
    })
  }

  render(){
    return(
      <main className="App__main">
        <p>hi</p>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ( 
  bindActionCreators({
    addStateInfo,
    isLoading 
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);