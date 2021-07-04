import React from 'react';
import { format, parse, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';

const CalendarDays = ({state}) => {
  const { currentDate, selectedDate } = state;
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const selectDate = (day) => {
    state.selectedDate = day
  }

  const weeks= [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    console.log(day)
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
          onClick={() => selectDate(parse(cloneDay, 'd', new Date()))}
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

  console.log(weeks)

  return (
    <div className="body">{weeks}</div>
  )
}

export default CalendarDays
