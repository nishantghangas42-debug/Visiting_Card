import React from 'react'
import './App.css'
import myPic from './assets/myPic.jpeg'

const App = () => {
  return (
    <div className="main">
      <div className="card">
        <h1>Nishant</h1>
        <h3>Full Stack Developer</h3>
      </div>

      <div className="card2"><img src={myPic} alt="" /></div>

      <div className="contact">
        <h4>📳 8396089811</h4>
        <h4>📧 nishantghangas42@gmail.com</h4>
        <h4>🚂 Mandi, Panipat</h4>
      </div>
    </div>
  )
}

export default App