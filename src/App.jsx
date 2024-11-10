import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './composant/Header.jsx';
import Footer from './composant/Footer.jsx'
import Home from'./pages/Home.jsx'
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';

function App() {
  return(
    <> 
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/User" element={<User/>} />
    </Routes > 
    <Footer/>
    </>
  )
}

export default App
