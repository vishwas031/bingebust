import {BrowserRouter} from 'react-router-dom'
import Popular from './components/Popular';
import Nav from './components/Nav';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Popular/>
      </BrowserRouter>
    </div>
  );
}

export default App;
