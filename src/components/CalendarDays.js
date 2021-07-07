import React from 'react';
import { format, parse, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';

const CalendarDays = ({state}) => {
  const [currentDate, setCurrentDate, viewDate, setViewDate, selectedDate, setSelectedDate] = state;

  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weeks= [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;

      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart) ? 'disabled' :
            isSameDay(day, selectedDate) ? 'selected' :
            ""
          }`}
          key={day}
          onClick={() => setSelectedDate(parse(cloneDay, 'd', new Date()))}
        >
          <span className="number">{formattedDate}</span>
          {/* <span className="bg">{formattedDate}</span> */}
        </div>
      );
      day = addDays(day, 1)
    }

    weeks.push(
      <div className='row' key={day}>
        {days}
      </div>
    )
    days = [];
  }

  return (
    <div className="body">{weeks}</div>
  )
}

export default CalendarDays
