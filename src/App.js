import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextField from './components/TextField';
import Alert from './components/Alert';
// import About from './components/About';
// import { Route, BrowserRouter as Router } from 'react-router-dom' 

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{

    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#4d4d4f';
      showAlert('success', 'you have enabled dark mode');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'you have enabled light mode');
    }
  }
  const showAlert = (msgType, message)=> {

    setAlert({
      msg: message,
      type:msgType
    })
    setTimeout(()=> {
      setAlert(null)}, 3000)
  }

  return (
    <>
   
     <Navbar mode = {mode} showMode={toggleMode} title = "Textutils" about='About TextUtils'/>
     <Alert alert = {alert}/>
      <TextField mode = {mode} heading='Enter Text Below '/>
     
    {/* <switch>
      <Route exact path='/about'>
         <About/>
      </Route>
    </switch> */}
     
 
    
    </>
  );
}

export default App;
