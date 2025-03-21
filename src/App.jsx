//import "./index.css";
import Navbar from "./components/Navbar";
import Texform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { Routes, Route } from "react-router";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeToggleMode = () => {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };
  const toggleMode = (cls) => {
    removeToggleMode();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode(cls);
      document.body.style.backgroundColor = "grey";
      showAlert(`${cls} mode is enabled`, "success");
      document.title = "Textutil - Dark mode";
    } else {
      setMode(cls);
      document.body.style.backgroundColor = "white";
      showAlert(`${cls} mode is enabled`, "success");
      document.title = "Textutil - Light mode";
    }
  };

  return (
    <>
      <Navbar
        title="Text-Tuts"
        aboutname="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={<Texform mode={mode} showAlert={showAlert} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
