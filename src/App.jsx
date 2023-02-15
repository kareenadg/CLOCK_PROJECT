import './App.css'
import DigitalClock from './components/DigitalClock';
import CountDown from './components/CountDown';
import StopWatch from './components/StopWatch';

const App = () => {

  return (
    <div className="App">
    <DigitalClock />
    <CountDown />
    <StopWatch />
    </div>
  )
}

export default App;
