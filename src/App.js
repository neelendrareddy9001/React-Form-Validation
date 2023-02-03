import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
        </Routes>
    </>
  );
}

export default App;
