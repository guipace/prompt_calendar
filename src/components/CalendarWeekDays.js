import React from 'react';

const CalendarWeekDays = ({state}) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="days row">
      {weekDays.map((day) => {
        return (
          <div className="col col-center" key={day}>{day}</div>
        )
      })}
    </div>
  )
}

export default CalendarWeekDays;
