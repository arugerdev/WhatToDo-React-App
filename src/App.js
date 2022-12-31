import './App.css';
import Header from './components/Header'
import {Route} from 'wouter'
import ToDoPage from './pages/ToDo'
import About from './pages/About'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route component={ToDoPage} path='/'></Route>
      <Route component={About} path='/about'></Route>
      <h1 className='copyright'>® aruger.dev</h1>
    </div>
  );
}

export default App;
