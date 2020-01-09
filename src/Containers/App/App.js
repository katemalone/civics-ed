import React, { Component } from 'redux';
import { getStateInfo, getAllStatesList } from '../../utils/apiCalls'

class App extends Component {

  componentDidMout(){
      const statesList = async () => {
        const await getAllStatesList()
        return (
          <li></li>
        )
      }
      
    }
  }

  render(){
    return(
      <main className="App__main">
        <ul></ul>
      </main>
    )
  }
}