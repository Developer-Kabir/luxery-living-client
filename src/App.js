import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div>
      <div className='app'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
