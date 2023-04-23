// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleSwitch = ()=>{
    if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleSwitch={toggleSwitch} />
      <Alert alert={alert} />
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
