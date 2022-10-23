import {BrowserRouter} from 'react-router-dom';
import { NavbarVargas } from './components/routes/NavbarVargas';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarVargas/>
      </BrowserRouter>
    </div>
  );
}

export default App ;
