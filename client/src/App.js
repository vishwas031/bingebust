import {BrowserRouter} from 'react-router-dom'
import Popular from './components/Popular';
import Nav from './components/Nav';
import './App.css'
import Desciption from './pages/Desciption';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        {/* <Popular/> */}
        <Desciption/>
      </BrowserRouter>
    </div>
  );
}

export default App;
