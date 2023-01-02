import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import TestForm from './components/TestForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"
function App() {
const [mode,setmode] = useState('light')
const [alert,setalert] = useState(null)
const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setalert(null)
  },1500)
}
const toggleMode=()=>{
  if (mode === 'light')
      {
        setmode('dark')
      document.body.style.backgroundColor ='#052b4c'
      showAlert("Dark mode has been enabled","success")  
      document.title = "TextUtils - Dark Mode"
  
  }

  else 
  { 
    setmode('light')
  document.body.style.backgroundColor ='white'
  showAlert("Light mode has been enabled","success")  
  document.title= "TextUtils - Light Mode"
}

}
  return (
    <>
    
<Router>
{<Navbar title='Textutils' mode = {mode} toggleMode = {toggleMode}/>} 
<Alert alert={alert} />

<div className="container my-3">
  <Routes>
    <Route exact path='/about' element={<About/>}/>
    
      

    <Route exact path='/' element ={<TestForm showAlert={showAlert} heading ='Enter the text to analyze' mode = {mode}/>}/>
     

  </Routes>
  </div> 

  </Router>
</>
  )
}

export default App;
