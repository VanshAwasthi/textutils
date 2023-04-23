import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was click "+ text);not necessary
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was click "+ text);not necessary
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    // console.log("Uppercase was click "+ text);not necessary
    let newText = '';
    setText(newText);
  }
  const handleextractEmails = () => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)+ ",";
    }

    const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

  const handleOnChange = (event)=>{
    // console.log("On Change"); not necessary
    setText(event.target.value);
  }

  const [text,setText] = useState("");
        // text="Vansh" ;cannot chnage state like this
        // setText("Vansh"); use function to update state
    return (
      <>
            <div className="container" style={{color: props.mode ==='dark'? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? 'grey' : 'white', color:props.mode ==='dark'? 'white' : '#042743'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>           
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>           
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>           
            </div>  
            <div className="container my-3" style={{color: props.mode ==='dark'? 'white' : '#042743'}}>
              <h2>Your text summary</h2>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>{0.008*text.split(" ").length} minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text : "Enter something to preview it here"}</p>
              <p>Emails : {handleextractEmails()}</p>
            </div>
      </>
  )
}
