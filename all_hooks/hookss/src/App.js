import logo from './logo.svg';
import './App.css';
import Counter from "./components/UE"
import CallB from "./components/CallB"
function App() {
  console.log("App rendered");
  return (
    <div className="App">
      <Counter/>
      <CallB/>
    </div>
  );
}

export default App;
