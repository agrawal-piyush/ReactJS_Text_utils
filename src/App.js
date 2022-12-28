import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/about';
import TestForm from './components/TestForm';


function App() {
  return (
    <>
   
{<Navbar title='Textutils'/>} 

<div className="container my-3">
  <TestForm heading ='Enter the text to analyze'/>
  </div> 
{/*
<div className="container my-3">

  <About/>
</div>
*/}
</>
  )
}

export default App;
