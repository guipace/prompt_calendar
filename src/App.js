import './App.css';
import TheHeader from './components/TheHeader'
import TheContentFrame from './components/TheContentFrame';

function App() {
  const state = {
    currentDate: new Date(),
    viewDate: new Date(),
    selectedDate: new Date(),
  }

  return (
    <div className="App">
      <TheHeader state={state}/>
      <TheContentFrame state={state}/>
    </div>
  );
}

export default App;
