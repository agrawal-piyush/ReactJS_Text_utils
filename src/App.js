import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
function App() {
  return (
    <>
   
{<Navbar title='Textutils'/>} 
<div className="container my-3"><TestForm heading ='Enter the text to analyze'/></div>

</>
  )
}

export default App;
