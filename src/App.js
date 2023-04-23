// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
// import About from './components/About';

function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enable or not
  const toggleSwitch = ()=>{
    if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleSwitch={toggleSwitch} />
      <div className="container my-3" >
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
      </div>
      </>
  );
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "Set title here",
  aboutText : "About text here"
}
export default App;
