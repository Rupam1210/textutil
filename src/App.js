
import './App.css';
import TextForm from './component/TextForm';
// import About from './component/DArk ';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
 
import React,{ useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
 

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode is enbled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode is enbled","success");
    }
    
  }

  return (
     <>
    {/* <Router> */}

     <Navbar title="textutil" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <TextForm  showAlert ={showAlert} heading="Enter the text to analyize" mode={mode}  />
{/*       
       <Routes> 
        <Route exact path='/about' element={<About /> }>       
        </Route>
        <Route exact path='/' element={</Route>
     </Routes>  */}
     </div>
     {/* </Router> */}
     
     </>
  );
}

export default App;
