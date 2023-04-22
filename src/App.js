// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my-3" >
      <TextForm heading="Enter the text to analyze"/>
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
