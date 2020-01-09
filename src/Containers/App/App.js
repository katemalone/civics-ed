import React, { Component } from 'redux';
import { getStatesInfo, getAllStatesList } from '../../utils/apiCalls'

class App extends Component {

  componentDidMout(){
    const stateInfo = async() => {
      await getStatesInfo
    }
    console.log("stateInfo", stateInfo)
    return stateInfo
  }



  render(){
    return(
      <main className="App__main">
        <ul></ul>
      </main>
    )
  }
}