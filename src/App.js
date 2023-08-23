import logo from './logo.svg';
import './App.css';
import ParentComp from './components/UseContext/ParentComp';
import HOC from './components/HOC';
import CounterForTodos from './components/UseCallback/CounterForTodos';
import UseMemo from './components/UseMemo/UseMemo';
import RadioButton from './components/RadioButton';

function App() {
  return (
    <div className="App">
      {/* <ParentComp /> */}
      {/* <HOC /> */}
      {/* <CounterForTodos /> */}
      {/* <UseMemo /> */}
      <RadioButton />
    </div>
  );
}

export default App;
