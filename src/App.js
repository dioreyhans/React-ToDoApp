
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
      <GlobalProvider>
        <Router>
          <Routes>
            <Route exact path="https://dioreyhans.github.io/React-ToDoApp" element={<Home/>} />
            <Route path="https://dioreyhans.github.io/React-ToDoApp/add" element={<AddTodo/>} />
            <Route path="https://dioreyhans.github.io/React-ToDoApp/edit/:id" element={<EditTodo/>} />
          </Routes>
        </Router>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
