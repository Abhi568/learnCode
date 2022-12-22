import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div id="app">
      <div>
      <Navbar></Navbar>
      </div>
      <div className='my-3'>
      <Home></Home>
      </div>
    </div>
  );
}

export default App;
