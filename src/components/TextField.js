import React, { useState } from 'react'

export default function TextField(pro) {

  const [text, setText] = useState('');
  const handleOnChange = (event)=> {
    console.log('on change performed....');
    setText(event.target.value)
  }

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handlelowerCase = ()=> {

    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearText = ()=>{
    let newText = ''
    setText(newText)
  }
  const handleCopyText = ()=> {

    var myText = document.getElementById("myBox");
    // console.log(myText);
    myText.select();
    navigator.clipboard.writeText(myText.value)
  }
  return (
    <div className='container' style={{color:pro.mode === 'dark'?'white':'black'}}>
       
       <div className="my-3">
         <h2>{pro.heading}</h2>
        <textarea style={{color:pro.mode === 'dark'?'white':'black', backgroundColor:pro.mode === 'dark'?'#161636':'white'}} value = {text} onChange={handleOnChange} className="form-control" id="myBox" rows="6"/>
       </div>   
       <button className="btn btn-success" onClick={handleUpCase}>conver to Upercase</button>
       <button className="btn btn-success mx-2" onClick={handlelowerCase}>conver to lowercase</button> 
       <button className="btn btn-success mx-2" onClick={handleClearText}>Clear Text</button> 
       <button className="btn btn-success mx-2" onClick={handleCopyText}>Copy Text</button> 

       <div>
          <h3 className='my-1'>text summary</h3>
          <p>{text.split(' ').length} words and {text.length} characters</p>
          <h4>Preview </h4>
          <p>{text}</p>
        </div>   
    </div>
  )
}