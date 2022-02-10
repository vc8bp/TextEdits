import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';





function App() {

  const [mode, setMode] = useState("light");
  
  const toggleMode = () => {
    if(mode === "dark"){

      document.body.style.backgroundColor = "white"
      setMode("light")
    } else {
      document.body.style.backgroundColor = "#2c2556"
      setMode("dark")
    }
  }

  

  return (
    <>
  <NavBar Title="TextEditor" About="About us" mode={mode} toggleMod={toggleMode}/>
  <TextForm heading="Enter your text to analyse" style={toggleMode} mode={mode} />
</>
  );
}

export default App;
