import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Popular/>
      </BrowserRouter>
    </div>
  );
}

export default App;
