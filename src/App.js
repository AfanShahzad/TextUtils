import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [myStyle, setMyStyle] = useState([
    {
      color: "black",
      backgroundColor: "white",
    },
    {
      mode: "Dark Mode",
    },
  ]);

  const changeMode = () => {
    if (myStyle[0].color === "black") {
      setMyStyle([
        {
          color: "white",
          backgroundColor: "#04001e",
        },
        {
          mode: "Light Mode",
        },
      ]);
    } else {
      setMyStyle([
        {
          color: "black",
          backgroundColor: "white",
        },
        {
          mode: "Dark Mode",
        },
      ]);
    }
  };
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    changeMode();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#04001e";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (m, t) => {
    setAlert({
      msg: m,
      type: t,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  return (
    <React.Fragment>
      {/* <Router> */}
        <div className="top-0 position-sticky" style={{ zIndex: "100" }}>
          <Navbar
            title="My App"
            navItem1="Home"
            navItem2="About"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
        </div>
        {/* <Routes> */}
          {/* <Route
            path="/about"
            element={<About myStyle={myStyle} changeMode={changeMode} />}
          /> */}
          {/* <Route
            path="/"
            element={ */}
              <TextForm
                heading="Enter text"
                myStyle={myStyle}
                showAlert={showAlert}
              />
            {/* }
          /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </React.Fragment>
  );
}

export default App;
