import React ,{useState}from 'react'


export default function TestForm(props) {
  const handleupClick=()=>{
   // console.log('Upper case click '+text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case!","success")
  }
  const handleloClick=()=>{
    // console.log('Upper case click '+text)
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to Lower Case!","success")
   }

  const clear=()=>{
    setText('')
    props.showAlert("Text cleared","success")
   }
   
  const handleonChange=(event)=>{
    //console.log('on change click')
    setText(event.target.value)

  }
  const [text, setText] = useState('');
  //text = "new text" Wrong way
  //setText('Hi hello')//right way
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
    <div className="mb-3">

    <textarea className="form-control my-2"value={text}  onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'?'#476179':'white', color : props.mode ===  'dark'?'white':'black'}} id="myBox" rows="9"></textarea>
    <button className='btn btn-primary mx-2' onClick={handleupClick}>Convert to Upper case </button>
    <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to Lower case </button>
    <button className='btn btn-primary mx-2' onClick={clear}>Clear Text</button>

    </div>
</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
  <h3> Your text Summary</h3>
  <p> {text.split(' ').length} words and {text.length} char </p>
  <p> {text.split(' ').length*0.008} minutes read </p>
  <h3> Preview</h3>
  <p> {text.length>0? text:'Enter your text please'}</p>

</div>
</>
  )
}
