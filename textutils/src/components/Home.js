import React, {useState}from 'react'
import Navbar from './Navbar'
import TextForm from './TextForm'


export default function Home() {
    const [mode, setMode] = useState('light')
 const toggleMode= () =>{
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  }
  return (
    <>
   <Navbar title = "TextUtils" aboutText = "About TextUtils" mode ={mode} toggleMode={toggleMode}/>
   <div className="container">
    <TextForm heading="Enter the text to analyze below" mode ={mode}/>
    </div>
    </>
  )
}
