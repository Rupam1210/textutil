import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText( newText)
    props.showAlert("Convert into UpperCase","success");

  }
  const handleONCHANGE=(e)=>{
    setText(e.target.value);
  }
  const clearText=()=>{
    let newText='';
    setText(newText);
    props.showAlert("text is cleared","success");
  }
  const handleDownClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert into LowerCase","success");
  }
  const [text, setText]=useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
      <h1 className='mx-3'>{props.heading}</h1>
      <div className="m-3">
      
      <textarea className="form-control" value={text} onChange={handleONCHANGE} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}></textarea>
      

      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to Uppercase</button>
      <button className="btn btn-primary mx-3 " onClick={handleDownClick}>convert to lowercase</button>
      <button className="btn btn-primary m-3 " onClick={clearText}>clear text</button>
    </div>
    <div className="container  m-3"  style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your Text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p><b>{0.008 *text.split(" ").length}</b> Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"enter the text in textarea to preview it here"}</p>
    </div>
    </>
  )
}
