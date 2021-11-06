import './App.css';
import SearchCity from './Components/SearchCity';
import CityCard from './Components/CityCard'

function App() {
  return (
    <div className="App-container">
      <h1>Wheather checker App</h1>
      <SearchCity/>
      {/* <CityCard/> */}
    </div>
  );
}

export default App;
