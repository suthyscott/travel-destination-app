import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AddDestination from './Components/AddDestination';
import Details from './Components/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/addDestination' element={<AddDestination/>}/>
        <Route path='/destinationDetails/:destinationId' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
