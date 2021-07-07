import React from 'react';
import { format, addMonths } from 'date-fns';

const CalendarHeader = ({state}) => {
  const [currentDate, setCurrentDate, viewDate, setViewDate, selectedDate, setSelectedDate] = state;

  const  prevMonth = () => {
    setViewDate(addMonths(viewDate, -1))
  };
  const nextMonth = () => {
    setViewDate(addMonths(viewDate, 1))
  };

  return (
    <div id='calendar-header'>
      <div className='icon' onClick={prevMonth}>arrow_back_ios</div>
      <h1>{format(viewDate, 'MMMM yyyy')}</h1>
      <div className='icon' onClick={nextMonth}>arrow_forward_ios</div>
    </div>
  )
}

export default CalendarHeader;
