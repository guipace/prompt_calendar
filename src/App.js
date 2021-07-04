import './App.css';
import TheHeader from './components/TheHeader'
import TheContentFrame from './components/TheContentFrame';



function App() {
  const state = {
    currentDate: new Date(),
    selectedDate: new Date(),
  }

  function renderHeader() {}

  function renderDays() {}

  function renderCells() {}

  const onDateClick = day => {};

  const nextMonth = () => {};

  const  prevMonth = () => {};

  return (
    <div className="App">
      <TheHeader />
      <TheContentFrame />
    </div>
  );
}

export default App;
