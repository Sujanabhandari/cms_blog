import logo from './logo.svg';
import './App.css';
import { client } from './main';

function App() {
  console.log(process.env.REACT_APP_SPACE_ID)
  return (
    <div className="App">
      <h1>Hello All </h1>
    </div>
  );
}

export default App;
