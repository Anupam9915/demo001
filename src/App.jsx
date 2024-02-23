import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componenet/Home';
import Profile from './Componenet/Profile';
import Adduser from './Componenet/AddUser';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/addprofile' element={<Profile/>}/>
     <Route path='/adduser' element={<Adduser/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
