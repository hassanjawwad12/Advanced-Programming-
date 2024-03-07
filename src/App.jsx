import React from 'react'
import Person from './Person'

function App() {

  return (
    <>
    <div>
      <Person/>
      <h1>Hello Class</h1>
    </div>
    </>
  )
}

export default App
//this is a functional component


//class component
/*
import {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Class</h1>
      </div>
      React.createElement('div', null, React.createElement('h1', null, 'Hello Class')
    )
  }
}

*/