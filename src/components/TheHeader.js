import React from 'react';
import logo2 from '../images/logo2.png'

const TheHeader = ({state}) => {

  return (
    <div className='App-header'>
      <h1><img src={logo2} alt='logo' style={{height: '2rem'}}></img> - Appointment Calendar</h1>
    </div>
  )
}

export default TheHeader
