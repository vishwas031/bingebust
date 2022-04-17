import {BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav';
import Pages from './pages/Pages';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
