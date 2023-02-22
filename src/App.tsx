import './App.css'
import Header from './components/Header/Header'
import Location from './components/Location/Location'
import Company from './components/Company/Company'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Company />
      <Location />
    </div>
  )
}
export default App
