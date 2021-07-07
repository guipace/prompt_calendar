import React from 'react';
import logo2 from '../images/logo2.png'

const TheHeader = () => {

  return (
    <div id='the-header'>
      <img src={logo2} alt='logo' style={{height: '2.5rem'}}></img>
      <h1> - Appointment Calendar</h1>
    </div>
  )
}

export default TheHeader
