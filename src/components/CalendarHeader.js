import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({state}) => {
  const  prevMonth = () => {
    console.log('PREVIOUS MONTH')
  };
  const nextMonth = () => {
    console.log('NEXT MONTH')
  };

  return (
    <div>
      <div className='' onClick={prevMonth}>Prev</div>
      <h1>{format(state.viewDate, 'MMMM yyyy')}</h1>
      <div className='' onClick={nextMonth}>Next</div>
    </div>
  )
}

export default CalendarHeader;
