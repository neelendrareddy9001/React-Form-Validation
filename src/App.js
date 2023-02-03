import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Details from './components/Details'
import Error from './components/Error'
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
