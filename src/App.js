// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //alert ek object hai ham alert ko object bna rhe hai, dhyaan rakhna

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses = ()=>{
  //   document.body.ClassList.remove('bg-primary');
  //   document.body.ClassList.remove('bg-success');
  //   document.body.ClassList.remove('bg-warning');
  //   document.body.ClassList.remove('bg-danger');
  // }

  const toggleRoutes = () => {
    // console.log(cls);//extra for color pallet
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; //#042743
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleRoutes={toggleRoutes} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
          {/* <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
export default App;
