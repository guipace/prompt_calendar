import React from 'react';

const CalendarWeekDays = ({state}) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex" id='week-days'>
      {weekDays.map((day) => {
        return (
          <div className="col col-center" key={day}>{day}</div>
        )
      })}
    </div>
  )
}

export default CalendarWeekDays;
