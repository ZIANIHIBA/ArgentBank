import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './composant/Header.jsx';
import Footer from './composant/Footer.jsx'
import Home from'./pages/home.jsx'
//import { useSelector } from 'react-redux'


function App() {
  //const state=useSelector()

  return(
    <> 
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
    </Routes> 
    <Footer/>
    </>
  )
}

export default App
