import { useState } from 'react'
import { SendForm } from './components/SendForm'
import { Messages } from './components/Messages'
import './App.css'

function App() {

  return (
    <div className="App">
      <SendForm/>
      <Messages />
    </div>
  )
}

export default App
