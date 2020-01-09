import React, { Component } from 'react';
import { getStateInfo } from '../../utils/apiCalls'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      currentState: {}
    }
  }

  componentDidMount() {
    const it = 'ca'
    return getStateInfo(it)
      .then(data => console.log("data", data));
  }


  render(){
    return(
      <main className="App__main">
        <p>hi</p>
      </main>
    )
  }
}

export default App;