import { useState } from "react"
export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClClick = () =>{
        let newText = ("");
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text,setText] =useState('');
  return (
    <>
    <div>
        <h1 className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black', border: '1px solid black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split (" ").length} Words and {text.length} characters</p>
        <p>Can be read in {0.008* text.split (" ").length} Minutes </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Text Box to Preview it here"}</p>

    </div>
    </>
  )
}
