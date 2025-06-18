import React, { useState } from "react";

export default function TexthtmlForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("You cleared the text","warning")
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  let words, characters;
  if (text === "") {
    words = 0;
    characters = 0;
  } else {
    words = (text.split(" ")).filter(e=>e).length;
    characters = (text.split(" ")).filter(e=>e).join("").length;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="my-3">
          <h1>{props.heading || "Text form"}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="3"
            onChange={handleOnChange}
            value={text}
            placeholder="Enter text here"
          ></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <div className="btn btn-outline-success" onClick={handleUpClick}>
            Convert to UpperCase
          </div>
          <div
            className="btn btn-outline-success"
            onClick={handleLowClick}
          >
            Convert to LowerCase
          </div>
          <div
            className="btn btn-outline-danger"
            onClick={handleClearClick}
          >
            Clear
          </div>

        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {words} words, {characters}
          characters
        </p>
        <p>{0.008 * words} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
}
