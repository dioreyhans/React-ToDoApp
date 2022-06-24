
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from './components/Home';
import {AddTodo} from './components/AddTodo';
import {EditTodo} from './components/EditTodo';
import {GlobalProvider} from './context/GlobalState'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <h1>TES</h1>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/add" element={<AddTodo/>} />
            <Route path="/edit/:id" element={<EditTodo/>} />
          </Routes>
        </Router>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
