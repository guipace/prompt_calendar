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
    <div>
      <div className='' onClick={prevMonth}>Prev</div>
      <h1>{format(viewDate, 'MMMM yyyy')}</h1>
      <div className='' onClick={nextMonth}>Next</div>
    </div>
  )
}

export default CalendarHeader;
