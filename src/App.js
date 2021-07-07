import './App.css';
import TheHeader from './components/TheHeader'
import TheContentFrame from './components/TheContentFrame';
import { useState } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const state = {
  //   currentDate: new Date(),
  //   viewDate: new Date(),
  //   selectedDate: new Date(),
  // }

  return (
    <div className="center-text">
      <TheHeader />
      <TheContentFrame state={[currentDate, setCurrentDate, viewDate, setViewDate, selectedDate, setSelectedDate]}/>
    </div>
  );
}

export default App;
