import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarDays from './CalendarDays';

const Calendar = ({state}) => {

  return (
    <div className='calendar'>
      <CalendarHeader state={state}/>
      <CalendarWeekDays state={state}/>
      <CalendarDays state={state}/>
    </div>
  )
}

export default Calendar;
