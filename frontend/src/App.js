import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Main from './Component/Main';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
